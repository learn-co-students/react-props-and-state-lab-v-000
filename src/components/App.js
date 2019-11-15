import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

const api = "/api/pets"
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

  apiFilter = (filter) => (`?type=${filter}`)

  handleChangeType = event => {
    this.setState({
      filters: {
        type: event
      }
    })
  }

  handleFindPets = event => {
    let apiToFetch =
      this.state.filters.type === "all"
        ? api
        : api + this.apiFilter(this.state.filters.type);
    fetch(apiToFetch)
      .then(response => response.json())
      .then(data => this.setState({ pets: data }))
  }

  handleOnAdoptPet = (id) => {
    const newPetArray = this.state.pets.map((pet, i) => {
      if (pet.id === id) {
        pet.isAdopted = true
        return pet
      } else {
        return pet
      }
    })
    this.setState({
      pets: newPetArray
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
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handleFindPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handleOnAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
