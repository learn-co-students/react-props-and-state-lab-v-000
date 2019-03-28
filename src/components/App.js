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
    event.preventDefault()
    const petType = event.target.value

    this.setState({
      filters: { type: petType }
    })
  }

  onFindPetsClick = (event) => {
    // fetch setup and fetch
    let url
    const petType = this.state.filters.type

    if (this.state.filters.type === 'all') { url = '/api/pets' }
    else { url = `/api/pets?type=${petType}` }

    fetch(url)
    .then((resp) => resp.json())
    .then((data) => this.setState({ pets: data }))
  }

  onAdoptPet = (petId) => {
    const pets = this.state.pets.map( (pet) => {
      // '{}' tells Javascript that we want to create a new object
      // the '...pet' says that we want that new object to contain all the same contents as the pet object
      // return new pet object that isAdopted/update the adopted pet's adoption status
      // OR return the current pet
      return pet.id === petId ? { ...pet, isAdopted: true } : pet
    })
    // reset pets array state to previously filtered pets
    this.setState({ pets })
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
