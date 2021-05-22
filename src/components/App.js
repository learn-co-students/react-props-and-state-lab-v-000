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

  getPetsList = () => {
    let baseUrl = "/api/pets"
    let urlWithFilter = `${baseUrl}?type=${this.state.filters.type}`
    let fetchUrl = this.state.filters.type !== "all" ? urlWithFilter : baseUrl

    fetch(fetchUrl)
      .then(response => response.json())
      .then(petsList => this.setState({ pets: petsList }))
  }

  onChangeType = ({ target: { value } }) => this.setState({ filters: { ...this.state.filters, type: value }})
  onAdoptPet = (petId) => {
    let petList = this.state.pets.map(pet => pet.id === petId ? { ...pet, isAdopted: true } : pet)
    this.setState({ pets: petList })
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.getPetsList} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pet={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
