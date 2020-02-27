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

  handleChangeType = (event) => {
    let pet = event.target.value
    this.setState({
      ...this.state,
      filters: {
        type: pet
      }
    })
  }

  handlePetsClick = () => {
    let url = this.state.filters.type === "all" ? this.props.baseUrl : `${this.props.baseUrl}?type=${this.state.filters.type}`
    return fetch(url)
    .then(res => res.json())
    .then(pets => {
      this.setState({
        ...this.state,
        pets: pets
      })
    })
  }

  handleAdoptPet = (id) => {
    let pets = this.state.pets
    let pet = pets.find(p => p.id === id)
    let index = pets.indexOf(pet)
    pet.isAdopted = true
    if (index > -1) {
      pets.splice(index, 1, pet)
    }

    this.setState({
      ...this.state,
      pets: pets
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
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handlePetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={(id) => this.handleAdoptPet(id)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

App.defaultProps = {
  baseUrl: "/api/pets"
}

export default App
