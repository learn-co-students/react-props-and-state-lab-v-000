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
    
    this.onChangeType=this.onChangeType.bind(this);
    this.onFindPetsClick=this.onFindPetsClick.bind(this);
    this.onAdoptPet=this.onAdoptPet.bind(this);
  }
  
  onChangeType(filter) {
    this.setState({
      filters: Object.assign({}, this.state.filters, { type: filter, })
    })
  }
  
  onFindPetsClick() {
    var url = '/api/pets';
    
    if (this.state.filters.type !== 'all') {
      url = url + "?type=" + this.state.filters.type;
    }
    
    fetch(url)
      .then(response => response.json())
      .then(pets => this.setState({ pets }))
  }
  
  onAdoptPet(id) {
    this.state.adoptedPets.push(id);
  }

  
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters type={ this.state.filters } onChangeType={ this.onChangeType}
                              onFindPetsClick = { this.onFindPetsClick } />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet= { this.onAdoptPet } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;