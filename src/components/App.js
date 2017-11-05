import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }
  
  updateTypeState = type => {
    this.setState({
      filters: Object.assign({},this.state.filters, 
      {
        type: type
      })
    })
  };

  featchPets = () => {
    const type = this.state.filters.type;
    fetch('/api/pets' + (type == 'all' ? '' : `?type=${type}`))
    .then( data => data.json()).then(pets => this.setState({ pets: pets }))
  };

  adoptPet = (id) => {
    this.state.adoptedPets.push(id)
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                filters={this.state.filters.type} 
                onChangeType={this.updateTypeState}
                onFindPetsClick={this.featchPets}
              />
            </div>
            <div className="twelve wide column">  
              <PetBrowser 
                pets={this.state.pets} 
                adoptedPets={this.state.adoptedPets} 
                onAdoptPet={this.adoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
