import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleTypeChange = (event) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    }, () => console.log(this.state.filters.type))
  }

  fetchPets = () => {
    let baseUrl = '/api/pets'
    const filterType = this.state.filters.type
    if (filterType !== 'all') {
      baseUrl += `?type=${filterType}`
    }
    fetch(baseUrl)
      .then(res => res.json())
      .then(pets => this.setState({pets}))
  }

  onAdoptPet = petId => {
    const pets = this.state.pets.map(pet => {
      return pet.id === petId ? {...pet, isAdopted: true} : pet
    })
    this.setState({
      pets
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
                onChangeType={this.handleTypeChange}
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
                adoptedPets={this.state.adoptedPets}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
