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

  setType = (newType) => {
    this.setState({
      filters: { 
        ...this.state.filters,
         type: newType
      }
    })
  }
  
  setPet = (petList) => {
    this.setState({
      pets: petList
    })
  }

  fetchPets = (pet) => {
    fetch(`/api/pets?type=${pet}`)
      .then(response => response.json())
      .then(data => this.setPet(data)
      );
  }
  
  handleFetch = () => {
    if(this.state.filters.type === 'dog'){
      this.fetchPets('dog')
    } else if(this.state.filters.type === 'cat'){
      this.fetchPets('cat')
    } else if(this.state.filters.type === 'micropig'){
      this.fetchPets('micropig')
    } else {
      fetch('/api/pets')
        .then(response => response.json())
        .then(data => this.setPet(data)
      );
    }
  }
  
  onAdoptPet = (id) => {
   const pets = this.state.pets.map(pet => {
      return id === pet.id ? {...pet, isAdopted: true} : pet
    })
   this.setState({pets})
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
              <Filters onChangeType={this.setType} onFindPetsClick={this.handleFetch}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
