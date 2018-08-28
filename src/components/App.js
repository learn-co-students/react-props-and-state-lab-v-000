import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleFilterUpdate = (typeUpdate) => {
    this.setState({
      filters: {
        type: typeUpdate
      }
    })
  }

  handleFindPets = () => {
    let type = this.state.filters.type
    let url = '/api/pets'

    if (type !== 'all') {
      url += `?type=${type}`
    }

    fetch(url)
      .then(res => res.json())
      .then(petsJson => this.setState({ pets: petsJson }))

  }

  onAdoptPet = petId => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId],
    });
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
              <Filters onChangeType={this.handleFilterUpdate} onFindPetsClick={this.handleFindPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
