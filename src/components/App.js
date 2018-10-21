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

  handleTypeChange = event => {
    this.setState({[event.target.filters]: {type: event.target.value}})
  }

  fetchPetList = () => {
    const type = this.state.filters.type;

    if (type === 'all') {
      fetch('/api/pets')
        .then(response => response.json())
        .then(data => this.setState({pets: data}))
    } else {
      fetch(`/api/pets?type=${type}`)
        .then(response => response.json())
        .then(data => this.setState({pets: data}))      
    }
  }

  onAdoptPet = id => {
    const pets = this.state.pets;
    const pet = function findPetByID(pets, id) {
      return pets.find((pet) => {
        return pet.id === id;
      })
    }
    
    if (pet) {
      pet.isAdopted = true;
    } else {
      return pet;
    }

    this.setState({pets});
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
              <Filters onChangeType={this.handleTypeChange} onFindPetsClick={this.fetchPetList}/>
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
