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

  handleChangeType = (type) => {
    this.setState({
      filters:{
        ...this.state.filters,
        type: type
      }
    })
  }

  fetchPets = () => {
    let url = '/api/pets';

    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({ pets }));
  }

  handleOnAdoptPet = (petId) => {
    let updated_pets = this.state.pets.map(pet_object => {
      if (petId === pet_object.id) {
        pet_object.isAdopted = !pet_object.isAdopted
      }
      return (
        pet_object
      )

    })
    this.setState({
      pets: updated_pets
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
              <Filters onChangeType={this.handleChangeType}
                onFindPetsClick={this.fetchPets}
                filters={this.state.filters}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
                adoptedPets={this.state.adoptedPets}
                onAdoptPet={this.handleOnAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
