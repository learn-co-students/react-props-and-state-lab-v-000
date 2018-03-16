import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

export default class App extends React.Component {
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

  onAdoptPet = petId => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId],
    });
  }

  onFilterChange  = type => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: type,
      }
    });
  }

  fetchPets = () => {
    if (this.state.filters.type !== 'all') {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(res => res.json())
      .then(pets => this.setState({pets}));
    } else {
      fetch('/api/pets')
      .then(res => res.json())
      .then(pets => this.setState({pets}));
    }
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
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
