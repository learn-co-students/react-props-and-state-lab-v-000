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

  getPets = () => {
    if(this.state.filters.type === 'all'){
      fetch(`/api/pets`)
        .then(response => response.json())
        .then(data => this.setState({ pets: [...data] }))
    } else {
      console.log(this)
      fetch(`/api/pets?type=${this.state.filters.type}`)
        .then(response => response.json())
        .then(data => this.setState({ pets: [...data] }))
    }
  }

  filteredPets = () => {
    this.pets.filter(pet => pet.type === this.state.filters.type)
  }

  adoptPet = (id) => {
    const pets = this.state.pets.map(pet =>
      pet.id === id ? {...pet, isAdopted: true} : pet
    )
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
              <Filters onChangeType={selectedType => this.setState({filters: {type: selectedType}})} onFindPetsClick={this.getPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={id => this.adoptPet(id)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
