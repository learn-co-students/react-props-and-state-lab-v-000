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

  adoptPet = (petId) => {
    const newPets = this.state.pets.map((pet) => {
      if (pet.id === petId){
        pet.isAdopted = true;
      }
      return pet;
    })

    this.setState({
      pets: newPets
    })
  }

  handleChangeType = (newType) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: newType
      }
    }, console.log(this.state))
  }

  handleFindPetsClick = () => {
    console.log("find pets button clicked!")

    const url = '/api/pets' + (this.state.filters.type === 'all' ? '' : ('?type=' + this.state.filters.type))

    fetch(url).
    then((response) => {
      this.setState({
        pets: response
      })
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
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handleFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
