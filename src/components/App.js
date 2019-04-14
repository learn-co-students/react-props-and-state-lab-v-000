import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      adoptedPets: [],
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (selectedType) => {
    this.setState({
      filters: {
        type: selectedType
      }
    })
  }

  onFindPetsClick = () => {
    let url;
    if (this.state.filters.type === 'all') {
      url = '/api/pets'
    } else {
      url = '/api/pets?type=' + this.state.filters.type
    }
    fetch(url)
    .then(resp => resp.json())
    .then(resp => this.setState({
      pets: resp
      })
    )
    console.log(this.state.pets)
  }

  onAdoptPet = (adoptedPetId) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, adoptedPetId]
    })
    const adoptedPet = this.state.pets.find(pet => pet.id === adoptedPetId)
    adoptedPet.isAdopted = true
    console.log(adoptedPet)
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
