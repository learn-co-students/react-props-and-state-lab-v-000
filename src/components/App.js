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
  changeFilters = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }
  fetchPets = () => {
    let type = this.state.filters.type;
    let url = '/api/pets?type=' + type;
    if (type == 'all') {
      url = '/api/pets';
    }
    fetch(url)
    .then(response =>
      response.json()
    )
    .then(json => {
      this.setState({
        pets: json
      })
      console.log(this.state);
    })
  }
  adoptPet = (id) => {
    const pets = this.state.pets.map(pet => pet.id === id ? {...pet, isAdopted: true} : pet)
    this.setState({
      pets: pets
    })
    console.log(pets);
    console.log(this.state);
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
              <Filters onChangeType={event => this.changeFilters(event)} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
