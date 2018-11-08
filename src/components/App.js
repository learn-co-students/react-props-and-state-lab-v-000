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

  handleFetch = () => {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets').then(res => res.json()).then(data => this.setState({
          pets: data
        }))
    } else {
      fetch('/api/pets?type='+ this.state.filters.type).then(res => res.json()).then(data => this.setState({
          pets: data
        }))
    }
  }

  handleSetState = (data) => {
    this.setState({
      pets: data
    })
  }

  handleType = (event) => {
    this.setState({
      filters:{
        type: event.target.value
      }
    })
  }

  handleAdoption = (id) => {
    let pet = this.state.pets.find(pet => pet.id === id)
    pet.isAdopted = true
    this.setState({
      pets: [...this.state.pets, ...pet]
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
              <Filters onChangeType={this.handleType} onFindPetsClick={this.handleFetch}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handleAdoption} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
