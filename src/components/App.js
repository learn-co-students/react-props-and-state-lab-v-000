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

  onChangeType = event => {
    this.setState({
      pets: {...this.state.pets},
      filters: {
        type: this.target.type,
      }
    })
  }

  onFindPetsClick = event => {
    let url = "/api/pets"
    if(this.state.filters.type !== "all") {
       url = url + (`?type=${this.state.filters.type}`)
    }
    fetch(url).then(results => {
      this.setState({
        pets: {results},
        filters: {...this.state.filters}
      });
    })
  }

  onAdoptPet = petId => {
    let pets = this.state.pets
    let resultPet = pets.find(pet => {
      return pet.id === petId
    })
    resultPet.isAdopted = true 
    pets = [resultPet]
    this.setState({
      pets: pets,
      filters: {...this.state.filters},
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
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
