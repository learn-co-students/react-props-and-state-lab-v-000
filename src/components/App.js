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

  typeState = (type) => {
    this.setState({
      filters: {
        type: type
      }
    })
  }


  petsState = () => {
    let suffix = ""

    switch(this.state.filters.type) {
      case 'cat':
        suffix = "?type=cat"
        break;
      case 'dog':
        suffix = "?type=dog"
        break;
      case 'micropig':
        suffix = "?type=micropig"
        break;
      default:
        suffix = ""
    }

    fetch("/api/pets" + suffix)
      .then(response => response.json())
      .then(json => this.setState({pets: json}))
  }

  selectedState = (id) => {
    this.setState({
      selected: id
    })
  }

  adoptState = (id) => {
    let identifiedPet = {}
    for (const pet of this.state.pets) {
      if (pet.id === id) {
        identifiedPet = pet
      }
    }
    identifiedPet.isAdopted = true
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
              <Filters onChangeType={this.typeState} onFindPetsClick={this.petsState} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptState} pets={this.state.pets} selected={this.selectedState} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
