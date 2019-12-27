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

  onChangeType = (e) => {
    let filter = e.target.value
    this.setState({
      filters: {
        type: filter
      }
    })
  }

  onFindPetsClick = (e) => {
    if (this.state.filters.type !== 'all') {
      fetch(`/api/pets?type=${this.state.filters.type}`).then(res => res.json()).then(pets => {this.setState({pets: pets})})
    } else {
      fetch('/api/pets').then(res => res.json()).then(pets => this.setState({pets: pets}))
    }

  }

  onAdoptPet = (id) => {
    let pet = this.state.pets.find(pet => pet.id === id)

    pet.isAdopted = true

    this.setState({
      pets: [
        ...this.state.pets,
        pet
      ]
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
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
