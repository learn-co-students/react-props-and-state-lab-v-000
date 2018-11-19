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

  onChangeType = (e) => {
    this.setState({filters: {...this.state.filters, type: e.target.value}})
  }

  onFindPetsClick = (e) => {
    this.onChangeType(e)
    let petType = this.state.filters.type
    let petArray = this.state.pets
    petArray.length = 0
    if (petType === 'all') {
      fetch('/api/pets')
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          myJson.forEach(pet => petArray.push(pet))
        });
    }
    else {
      fetch(`/api/pets?type=${petType}`)
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          myJson.forEach(pet => petArray.push(pet))
        });
    }
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
              <Filters onClick={this.onFindPetsClick} onChange={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets = {this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
