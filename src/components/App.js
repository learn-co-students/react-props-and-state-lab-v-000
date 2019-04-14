import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import Pet from './Pet';

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

  // onAdoptPet = (id) => {
  //   this.pet.state.isAdopted === true
  // }

  onAdoptPet = petId => {
    const pets = this.state.pets.map(pet => {
      return pet.id === petId ? { ...pet, isAdopted: true } : pet;
    });
    this.setState({ pets });
  };

  onChangeType = (event) => {
    this.onFindPetsClick(event)
  }

  onFindPetsClick = () => {
    fetch('/api/pets')
    fetch('/api/pets?type=cat')
    fetch('/api/pets?type=dog')
    fetch('/api/pets?type=micropig')
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

              <Filters onFindPetsClick={this.onChangeType} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
