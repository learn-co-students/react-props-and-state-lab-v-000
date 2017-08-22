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

    this.changeFilter = this.changeFilter.bind(this);
    this.searchPets = this.searchPets.bind(this);
    this.handleAdoptPet = this.handleAdoptPet.bind(this);
  }

  changeFilter(type) {
    this.setState({
      filters: {
      ...this.state.filters,
        type: type
      }
    });
  }

  searchPets() {
    let type = this.state.filters.type
    let url = '/api/pets'

    if (type !== 'all') {
     url += `?type=${type}`
    } 
      
    fetch(url, {
      method: 'get'
    })
  }

  handleAdoptPet(petId) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId],
    });
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
                onChangeType={this.changeFilter}
                onFindPetsClick={this.searchPets}
               />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets={this.state.pets}
                adoptedPets={this.state.adoptedPets}
                onAdoptPet={this.handleAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;