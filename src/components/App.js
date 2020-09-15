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

  selectPetType = event => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })
   }

  listPets = () => {
    let petsUrl = "/api/pets"
  
    if (this.state.filters.type !== "all") {
      petsUrl += `?type=${this.state.filters.type}`;
    }
    fetch(petsUrl)
    .then(resp => resp.json())
    .then(pets => {
      this.setState({
        pets: pets
      })
    })
  }

  adoptPet = (petId) => {
   console.log(this.state.pets)
   console.log(petId)
    let foundPet = this.state.pets.find(pet => pet.id)
    console.log(foundPet)
    // foundPet.setState({
    //   isAdopted: true
    // })
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
              <Filters onChangeType={this.selectPetType} onFindPetsClick={this.listPets}/>
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
