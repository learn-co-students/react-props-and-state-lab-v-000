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
    this.setState({
      filters: { ...this.state.filters,
        type: event.target.value }
    });
  }

  fetchPets = () => {
    let endpoint = '/api/pets';
    let petType = this.state.filters.type;

    if (petType !== 'all') {
      endpoint += `?type=${petType}`
    }

    fetch(endpoint)
      .then(res => res.json())
      .then(pets => this.setState({ pets }))

  }

  onAdoptPet = (petId) => {
    this.state.pets.forEach(pet => {
      if (pet.id === petId) {
        pet.isAdopted = true;
      };
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.fetchPets}/>
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
