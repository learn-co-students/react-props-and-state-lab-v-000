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

  onChangeType = (event) => {
    const petType = event.target.value;

    this.setState({
      filters : {
        type: petType
      }
    })
  }
  
  onFindPetsClick = () => {
    let fetchUrl = '';

    if(this.state.filters.type == 'all') {
      fetchUrl = '/api/pets'
    } else {
      fetchUrl = `/api/pets?type=${this.state.filters.type}`
    }

    fetch(fetchUrl)
      .then(resp => resp.json())
      .then(json => this.setState({pets: json}))
  }

  onAdoptPet = id => {
    // find the pet object and modify it externally
    // call this.setState, using the spread operator to get an exact copy, then provide it with the updated pbject in order to override it. 

    let targetPet = this.state.pets.find(pet => pet.id == id);
    let targetPetIndex = this.state.pets.findIndex(pet => pet.id == id);
    
    targetPet.isAdopted = true;

    let newPetArray = [...this.state.pets]
    newPetArray[targetPetIndex] = targetPet

    this.setState({
      pets : newPetArray
    })

    // this.setState({
    //   pets: [...this.state.pets, {targetPet}]
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
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
