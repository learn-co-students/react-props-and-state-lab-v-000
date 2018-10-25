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

  handleSelectChange = event => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  handleFindPetsClick = () => {
    const selection = this.state.filters.type;
    let url;

    if (selection === "cat") {
      url = "/api/pets?type=cat"
    } else if (selection === "dog") {
      url = "/api/pets?type=dog"
    } else if (selection === "micropig") {
      url = "/api/pets?type=micropig"
    } else {
      url = "/api/pets"
    }

    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({ pets }));
  }

  handleAdoption = id => {
    const pet = this.state.pets.find(function(pet) {
      return pet.id === id
    })
    pet.isAdopted = !pet.isAdopted
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
              <Filters onChangeType={this.handleSelectChange} onFindPetsClick={this.handleFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handleAdoption} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
