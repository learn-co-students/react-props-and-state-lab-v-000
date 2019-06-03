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
    let selectValue = ''
    if (this.state.filters.type !== 'all') {
      selectValue = `?type=${this.state.filters.type}`
    }
    fetch(`/api/pets${selectValue}`)
      .then(response => response.json())
      .then((result) => {
        this.setState({
          pets: result
        })
      })
  }

  onAdoptPet = (id) => {
    let updatedPets = this.state.pets
    let pet = updatedPets.find(function(e) {
      return e.id === id
    })
    pet.isAdopted = true

    this.setState({
      pets: updatedPets
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
