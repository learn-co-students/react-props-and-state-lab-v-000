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

  handleFiltersChangeType = (filterChange) => {
    this.setState({
      filters: {
        type: filterChange
      }
    })
  }

  fetchPetsOnClick = () => {
    let queryParam = this.state.filters.type !== 'all' ? `?type=${this.state.filters.type}` : '';
    fetch(`/api/pets${queryParam}`)
      .then(response => response.json())
      .then(filteredPets => {
        this.setState({
          pets: filteredPets
        })
      })
  }

  adoptPet = (petId) => {
    const petsArray = this.state.pets.map(pet => {
      if (pet.id === petId) {
        return {...pet, isAdopted: true}
      } else
      return pet
    })
    this.setState({
      pets: petsArray
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
              <Filters onChangeType={this.handleFiltersChangeType} onFindPetsClick={this.fetchPetsOnClick} />
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
