import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = newType => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: newType
      }
    })
  }

  findPets = () => {
    let petsURL = '/api/pets';

    if (this.state.filters.type !== 'all') {
      petsURL += `?type=${this.state.filters.type}`;
    }

    fetch(petsURL)
      .then(petsData => petsData.json())
      .then(petsJson => {
        this.setState({ pets: petsJson })
      })
      .catch(error => `Here's what went wrong: ${error}`);
  }

  adoptPet = petId => { 
    // This technically passes the tests, but I think I need to update the state.
    // Right now, the disabled adoption button won't render.
    // const adoptedPet = this.state.pets.find(pet => pet.id === petId);
    // adoptedPet.isAdopted = true;
    // console.log(adoptedPet);

    let petsToAdopt = this.state.pets;
    const adoptedPet = petsToAdopt.find(pet => pet.id === petId);
    // const adoptedPetIndex = petsToAdopt.indexOf(adoptedPet); (This works, but it isn't needed.)

    adoptedPet.isAdopted = true;
    // petsToAdopt.splice(adoptedPetIndex, 1, adoptedPet); (See commented code above.)

    this.setState({
      pets: petsToAdopt
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.findPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
