import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';
import 'whatwg-fetch';

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

  handleFilterType = (type) => {
    this.setState({
      filters: Object.assign({}, this.state.filters, {type: type})
    })
  }

  handleFindPets = () => {
    var url = '/api/pets';
    if(this.state.filters.type !== 'all'){
      url += `?type=${this.state.filters.type}`;
    }
    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({pets}))
  }

  adoptPet = id => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
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
              <Filters
                filters={this.state.filters}
                onChangeType={this.handleFilterType}
                onFindPetsClick={this.handleFindPets}
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
