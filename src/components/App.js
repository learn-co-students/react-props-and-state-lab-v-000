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
        type: 'all'
      }
    };
  }

  onFilterChange = (filterSelection) => {
    this.setState({
      filters: {type: filterSelection}
    })
  }

  fetchPets = () => {
    let url = '/api/pets';
    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`;
    }

    fetch(url)
    .then(response => response.json())
    .then(data =>
      {this.setState({
        pets: data
      })
    })
  }

  addAdoptedPet = (id) => {
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
              <Filters filters={this.state.filters} onChangeType={this.onFilterChange} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.addAdoptedPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// adoptedPets: this.state.pets.filter(pet => pet.isAdopted)
