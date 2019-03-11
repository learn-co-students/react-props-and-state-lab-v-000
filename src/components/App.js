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
    event.preventDefault()
    const petType = event.target.value

    this.setState({
      filters: { type: petType }
    })
  }

  onFindPetsClick = (event) => {
    event.preventDefault()

    const petType = this.state.filters.type

    if (this.state.filters.type === 'all') {
      fetch('/api/pets')
      .then(function(response) {
        return response.json()
      })
      .then(function(myJson) {
        const petData = JSON.stringify(myJson)
      })
      // [{"id":"9750e959-f8ef-465f-9e13-16323454dc1f","type":"micropig","gender":"male","age":4,"weight":5,"name":"Hemingway","isAdopted":false}
    }else{
      fetch(`/api/pets?type=${petType}`)
      .then(function(response) {
        return response.json()
      })
      .then(function(myJson) {
        const petData = JSON.stringify(myJson)
      })
    }
  }

  onAdoptPet = (event) => {
    event.preventDefault()
    console.log("")
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
