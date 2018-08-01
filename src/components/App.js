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

  onChangeType = ({target: {value} }) => {
    this.setState({
      filters: {...this.state.filters, type: value}
    })
  }

  findPets = () => {
    let queryParam = '/api/pets'

    if (this.state.filters.type !== 'all'){
      queryParam = `/api/pets?type=${this.state.filters.type}`
    }

    fetch(queryParam)
    .then(results => results.json()).then(pets => this.setState({pets}))
  }

  adoptPet = petId => {
    const pets = this.state.pets.map(pet => {
      return pet.id === petId ? {...pet, isAdopted: true} : p
    })
    this.setState({pets})
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
