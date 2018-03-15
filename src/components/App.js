import React from "react"

import Filters from "./Filters"
import PetBrowser from "./PetBrowser"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: "all"
      }
    }

    this.onFindPetsClick = this.onFindPetsClick.bind(this)
    this.onChangeType = this.onChangeType.bind(this)
    this.onAdoptPet = this.onAdoptPet.bind(this)
  }

  onChangeType = e => {
    this.setState({ filters: { type: e } })
  }

  onAdoptPet = petId => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId]
    })
  }

  // onFindPetsClick = e => {

  onFindPetsClick = () => {
    let url = "/api/pets"
    switch (this.state.filters.type) {
      case "cat":
        url = "/api/pets?type=cat"
        break
      case "dog":
        url = "/api/pets?type=dog"
        break
      case "micropig":
        url = "/api/pets?type=micropig"
        break
      default:
        url = "/api/pets"
    }

    fetch(url)
      .then(function(response) {
        return response.json()
      })
      .then(pets => this.setState({ pets: pets }))
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
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
                filters={this.state.filters}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                adoptedPets={this.state.adoptedPets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
