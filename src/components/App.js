import React from 'react';

import Filters from './Filters.js';
import PetBrowser from './PetBrowser.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (type) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: type,
      },
    });
  }

  onFindPetsClick = () => {
    let endpoint = '/api/pets'

    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`;
    }

    fetch(endpoint)
      .then(response => response.json())
      .then(json => this.setState({
        pets: json,
      }));
  }

  onAdoptPet = (petId) => {
    const pets = this.state.pets.map(pet => {
      if (pet.id === petId) {
        return { ...pet, isAdopted: true };
      } else {
        return pet;
      }
    });

    this.setState({
      pets: pets,
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
