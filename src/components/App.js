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

  fetchPets = (url) => {
    fetch(url)
    .then(resp => resp.json())
    .then(json => this.updatePets(json))
  }

  updatePets = (json) => {
    this.setState((previousState) => {
      return { pets: [...json]}
    })
  }

  handleTypeChange = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  handleFindPetsClick = (event) => {
    let url = '/api/pets'
    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    }
    this.fetchPets(url)
  }

  onAdoptPet = (id) => {
    const updatedPets = this.state.pets.map((pet) => {
      return pet.id === id ? {...pet, isAdopted: true} : pet
    })
    this.setState((previousState) => {
      return {pets: updatedPets}
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
              <Filters onChangeType={this.handleTypeChange} onFindPetsClick={this.handleFindPetsClick}/>
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
