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

  fetchPets(type) {
    let url
    if (type === "cat" || type === "dog" || type === "micropig") {
      url = `/api/pets?type=${type}`
    } else {
      url = `/api/pets`
    }
    fetch(url)
      .then(res => res.json())
      .then(
        (results) => {
          this.setState({
            pets: results
          });
        }
      )
  }

  changeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onFindPetsClick = () => {
    this.fetchPets(this.state.filters.type)
  }

  onAdoptPet = (id) => {
    const pet = this.state.pets.find(element => element.id == id)
    pet.isAdopted = true
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
              <Filters onChangeType={this.changeType} onFindPetsClick={this.onFindPetsClick} />
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
