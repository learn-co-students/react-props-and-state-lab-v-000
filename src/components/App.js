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
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })
  }

  onFindPetsClick = event => {
    let url = "/api/pets";
    if (this.state.filters.type !== "all") {
      url += `?type=${this.state.filters.type}`
    }
    // try to use async/await here
    fetch(url)
      .then(res => res.json())
      .then(
        (pets) => {
          this.setState({
            pets
          })
        }
      )
  }

  onAdoptPet = (id) => {
    // there must be a more efficient way to update the state of one pet; currently updating the object in the array and replacing the old pets array with the new pets array
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
