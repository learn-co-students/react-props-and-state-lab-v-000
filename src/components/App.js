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

  changeType = ({ target: {value} }) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: value
      }
    })
  }

  fetchPets = () => {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets').then(res => res.json()).then(json => this.setState({
        ...this.state,
        pets: json
      }))
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`).then(res => res.json()).then(json => this.setState({
        ...this.state,
        pets: json
      }))
    }
  }

  adoptPet = petId => {
    const pets = this.state.pets.map(pet => {
      return pet.id === petId ? {...pet, isAdopted: true} : pet;
    });
    this.setState({
      pets
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
              <Filters onChangeType={this.changeType} onFindPetsClick={this.fetchPets}/>
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
