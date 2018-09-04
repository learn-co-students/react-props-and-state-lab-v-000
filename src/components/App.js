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

  handleType = ( { newType } ) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: newType
      }
    })
  }

  onAdoptPet = (id) => {
    let changePet = this.state.pets.find((pet) => pet.id === id);
    changePet.isAdopted = true
  }

  handleFindPets = () => {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets')
      .then(response => response.json())
      .then(data => this.setState({ pets: [...this.state.pets, data.pets] }))
    } else if (this.state.filters.type === 'cat') {
      fetch('/api/pets?type=cat')
      .then(response => response.json())
      .then(data => this.setState({ pets: [...this.state.pets, data.pets] }))
    } else if (this.state.filters.type === 'dog') {
      fetch('/api/pets?type=dog')
      .then(response => response.json())
      .then(data => this.setState({ pets: [...this.state.pets, data.pets] }))
    } else if (this.state.filters.type === 'micropig') {
      fetch('/api/pets?type=micropig')
      .then(response => response.json())
      .then(data => this.setState({ pets: [...this.state.pets, data.pets] }))
    }
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
              <Filters onChangeType={this.handleType} onFindPetsClick={this.handleFindPets}/>
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
