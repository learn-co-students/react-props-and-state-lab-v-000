import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';
import { getAll, getByType } from'../data/pets';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: getAll(),
      adoptedPets: ["2c902312-dfa3-446f-8b4b-5e115170d807"],
      filters: {
        type: 'all',
      }
    };
  }

  handleFilterChange = (type) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: type
      }
    })
  }

  fetchPets = () => {
    let apiUrl = '/api/pets'

    if (this.state.filters.type !== 'all') {
      apiUrl += `?type=${this.state.filters.type}`
    }

    // fetch(apiUrl).then(response => {
    //   this.setState({
    //     pets: getAll().filter(pet => pet.type === this.state.filters.type)
    //   })
    // })
    if (this.state.filters.type === 'all') {
      this.setState({
        pets: getAll()
      })
    } else {
      this.setState({
        pets: getByType(this.state.filters.type)
      })
    }
  }

  addToAdoptedPets = (id) => {
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
              <Filters pets={this.state.pets}
              adoptedPets={this.state.adoptedPets}
              filters={this.state.filters}
              onChangeType={this.handleFilterChange}
              onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
              onAdoptPet={this.addToAdoptedPets}
              isAdopted={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
