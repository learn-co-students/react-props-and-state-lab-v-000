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

  updateType = (type) => {
    this.setState({
      filters: {
        type: type
      }
      })
  }

  onAdoptPet = (id) => {
    
    let pets = this.state.pets.map((pet) => {
      if(pet.id === id){
        pet.isAdopted = true
        return pet;
      } else {
        return pet
      }
    })

    this.setState({
      pets: pets
    })

  }

  setPets = (array) => {
    this.setState({
      pets: array
    })
  }

  findPets = () => {
    // fetch a list of pets
    let filter = this.state.filters.type;
    if (filter === "all"){
      fetch("/api/pets")
      .then(response => {
        return response.json();   
      }).then(myJson => {
        this.setPets(myJson);
      });
    } else {
      fetch("/api/pets?type=" + filter)
      .then(response => {
        return response.json();   
      }).then(myJson => {
        this.setPets(myJson);
      });
    }

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
              <Filters onChangeType={this.updateType} onFindPetsClick={this.findPets}/>
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
