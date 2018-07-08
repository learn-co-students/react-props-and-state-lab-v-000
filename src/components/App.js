import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.adoptClick = this.adoptClick.bind(this)

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
    changeType = (animal) => {
      this.setState({
        filters: {
          type: animal
        }
      })
    }
  
    findPets = () => {
      let url = '/api/pets'
      if(this.state.filters.type !== 'all'){
        url += `?type=${this.state.filters.type}`
      }
      console.log(url)
    fetch(url)
    
    .then(response => response.json())
    
    .then(data => {
      this.setState({
        pets: data
      })
    })
    }

    adoptClick = (id) => {
      let pet = this.state.pets.find(p => p.id === id)
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
              <Filters onChangeType={this.changeType}  onFindPetsClick={this.findPets.bind(this)} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet = {this.adoptClick} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
