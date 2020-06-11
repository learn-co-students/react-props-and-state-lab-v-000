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

  onChangeType = event => {
    this.setState({
      filters : {
        ...this.state.filters,
        type: event.target.value
      }
    })
  }

  onFindPetsClick = event => {
    let url = "/api/pets"
    console.log("on click triggered!")
    if (this.state.filters.type !== "all") {
      url += `?type=${this.state.filters.type}`
    }
    fetch(url)
    .then(resp => resp.json())
    .then(
      (pets) => {
        this.setState({
          pets
        })
      }
    )
  }

  onAdoptPet = (id) => {
    let pets = this.state.pets
    let pet = pets.find(pet => pet.id === id)
    pet.isAdopted = true
    this.setState({
      pets: pets
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
