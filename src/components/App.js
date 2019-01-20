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

  onChangeType = (type) => {
    this.setState({
      filters: {
        //...this.state.filters,
        type: type
      }
    })
  }

  onfindPetsClick = () => {
    const baseAPI = '/api/pets'
    let queriedAPI

    if (this.state.filters.type === "all") {
      queriedAPI = baseAPI
    } else {
      queriedAPI = `${baseAPI}?type=${this.state.filters.type}`
    }

    fetch(queriedAPI)
      .then(response => response.json())
      .then(data => this.setState({
        pets: data
      }))
  }

  onAdoptPet = (event) => {
    const pets = this.state.pets.map(pet => {
      return pet.id === event ? {...pet, isAdopted: true} : pet;
    });
    this.setState({ pets });
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onfindPetsClick}/>
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
