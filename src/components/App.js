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

  setFilter = (filter) => {
    this.setState({
      filters: {
        type: filter
      }
    })
  }

  setPets = () => {
    let url = '/api/pets'
    let filter = this.state.filters.type

    filter != 'all'? url = `/api/pets?type=${filter}` : null

    fetch(url)
      .then(response => response.json())
      .then(pets => this.setState({ pets }))
  }

  adoptPet = (id) => {
    const pets = this.state.pets.map(pet => {
      return pet.id === id ? { ...pet, isAdopted: true } : pet
    })
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
              <Filters onChangeType={ this.setFilter } onFindPetsClick={ this.setPets }/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={ this.state.pets} onAdoptPet={ this.adoptPet }/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
