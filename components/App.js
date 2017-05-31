import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

function getURL(filter) {
  if (filter === 'all') {
    return '/api/pets'
  } else {
    return `/api/pets?type=${filter}`
  }
}

export default class App extends React.Component {
  constructor() {
    super();

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleFindPets = this.handleFindPets.bind(this);
    this.handleAdoptPet = this.handleAdoptPet.bind(this);

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  handleFilterChange(type) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type,
      })
    })
  }

  handleFindPets() {
    const url = getURL(this.state.filters.type)
    fetch(url)
    .then(res => res.json())
    .then(pets => this.setState({pets}))
  }

  handleAdoptPet(petId) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId]
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
              <Filters type={this.state.type} onChangeType={this.handleFilterChange} onFindPetsClick={this.handleFindPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.handleAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
