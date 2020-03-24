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

  onChangeType = (filter) => {
    this.setState({
      filters: {type: filter}
    })
  }

  onFindPetsClick = () => {
    let baseAddress = '/api/pets'
    let filterType = this.state.filters.type
    let petAddress = filterType === 'all' ? "" : '?type=' + filterType
    console.log(this.state.filters.type)
    console.log(petAddress)
    fetch(baseAddress + petAddress)
      .then(response => response.json())
      .then(data => this.setState({pets: data})
      )
    console.log(this.state)
  }

  onAdoptPet = (petId) => {
    this.setState({
      pets: this.state.pets.map(pet => {
        if (pet.id === petId) {pet.isAdopted = true}
        return pet
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
