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

  onChangeType = (event) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })
  }

  onFindPetsClick = (event) => {
    let fetchURL = '/api/pets'
    if (this.state.filters.type === 'cat') {
      fetchURL = '/api/pets?type=cat'
    } else if (this.state.filters.type === 'dog') {
      fetchURL = '/api/pets?type=dog'
    } else if (this.state.filters.type === 'micropig') {
      fetchURL = '/api/pets?type=micropig'
    }
    fetch(fetchURL).then(
      response => response.json()
    ).then(data => this.setState({
      pets: data
    }))
  }

  onAdoptPet = (petID) => {
    let pets = this.state.pets
    let adopted = pets.map(function(pet) {
      if (petID === pet.id) {
        pet.isAdopted = true
      }
      return pet
    })
    this.setState({
      pets: adopted
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
