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

    this.processFilterChange = this.processFilterChange.bind(this);
    this.fetchPets = this.fetchPets.bind(this);
    this.processAdoption = this.processAdoption.bind(this);

  }

  processFilterChange(type) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type,
      })
    });
  }

  fetchPets() {
    var url = '/api/pets'

    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`;
    }

    fetch(url).then(response => response.json()).then(pets => this.setState({pets}));

  }

  processAdoption(petID) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petID],
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
              <Filters filters={this.state.filters}
                onChangeType={this.processFilterChange}
                onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.processAdoption}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
