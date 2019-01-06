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
        ...this.state.filters,
        type: type
      }
    })
  }

  getPets = () => {
    let typeChoice;
    this.state.filters.type === 'all' ? typeChoice = 'pets' : typeChoice = `pets?type=${this.state.filters.type}`
    return fetch(`/api/${typeChoice}`).then(response => response.json())
  }

  setPets = (pets) => {
    this.setState({
      pets: pets
    })
  }

  onFindPetsClick = () => {
    this.getPets()
    .then(pets =>
      this.setPets)
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
              <PetBrowser pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
