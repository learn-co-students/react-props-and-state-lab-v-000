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

  handleFilter = (filterProps) => {
    this.setState({
      filters: {
        type: filterProps
      }
    })
  }

  handlePetClick = () => {
    let petURL = "/api/pets" 
    if (this.state.filters.type !== "all"){
      petURL = petURL + "?type=" + this.state.filters.type
    }
    fetch(petURL).then(response => {
      response.json().then(data => {
        this.setState({
          pets: data
        })
      })
    })
  }

  handleAdopt = () => {
    
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
              <Filters onChangeType={this.handleFilter} onFindPetsClick={this.handlePetClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdopt}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
