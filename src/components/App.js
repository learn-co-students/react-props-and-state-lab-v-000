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

  componentDidMount() {
    fetch('/api/pets')
      .then(function(response) {
        return response.json();
      })
      .then(allPets => {
        this.setState({pets: allPets})
      });
  }

  onChangeType = (e) => {
    this.setState({filters: {type: e.target.value}})
  }

  onAdoptPet = (petId) => {
    const updateAdoptedPet = (this.state.pets.map(pet => pet.id === petId ? {...pet, isAdopted:true} : pet));
    this.setState({pets: updateAdoptedPet})
  }

  onFindPetsClick = (e) => {
    let petType = this.state.filters.type
    let apiUrl = ""

    if (petType === 'all') {
      apiUrl = '/api/pets'
    }
    else {
      apiUrl = `/api/pets?type=${petType}`
    }
    fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(allPets => {
        this.setState({pets: allPets})
      });
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
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets = {this.state.pets} onAdoptPet = {this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
