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
    console.log(event)
      this.setState({
        filters: {
          type: event.target.value
        }
      }
    )
  }

  onFindPetsClick = () => {
    let url = `/api/pets`

    if (this.state.filters.type !== 'all') {
      url = "/api/pets?type="
      url += this.state.filters.type
    }

    fetch(url)
    .then(response => response.json())
    .then(
      (json) => {
        this.setState({
          pets: json
        });
      },
      (error) => {
        console.log(error.message)
      }
  );
  }

  onAdoptPet = (petId) => {
    let pets = this.state.pets

    pets = pets.map((pet) => {
      if (pet.id === petId) {
        pet.isAdopted = true
      }
      return pet
    })

    this.setState({
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
