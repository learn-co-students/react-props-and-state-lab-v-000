import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import Pets from '../data/pets.js'

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

  handleChangeType = (event) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })
  }

  handleFetch = () => {
    let endpoint = '/api/pets'
    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`
    }
    fetch(endpoint)
    .then(resp => resp.json())
    .then(pets => this.setState({
      pets: pets
    }))
  }

  handleAdoptPet = petID => {
    const newPetsArr = this.state.pets.map(pet => pet.id === petID ? {...pet, isAdopted : true} : pet)

    this.setState({pets: newPetsArr})
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
              <Filters onFindPetsClick={this.handleFetch} onChangeType={this.handleChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

// The app's initial state is already defined.
// App has two children: the <Filters /> and <PetBrowser /> components.

// App should pass a callback prop, onChangeType, to <Filters />. This callback needs to update <App />'s state.filters.type

// <Filters /> needs a callback prop, onFindPetsClick. When the <Filters /> component calls onFindPetsClick,
// <App /> should fetch a list of pets using fetch().