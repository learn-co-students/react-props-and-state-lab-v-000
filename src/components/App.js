import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      // results of your fetch request so you can pass the pet data down as props to <PetBrowser />
      // pet data received should include information on individual pets and their adoption status.
      pets: [],

      filters: {
        // The URL of the API is /api/pets with an optional query parameter
        // If the type is 'all', send a request to /api/pets
        // If.../api/pets?type=cat
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    event.preventDefault()
    const petType = event.target.value
    console.log(`you've changed to ${petType}`)
    this.setState({
      filters: { type: petType }
    })
  }

  onFindPetsClick = (event) => {
    event.preventDefault()
    console.log("You clicked the BUTTON!")
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
              // update state.filters.type // fetch a list of pets using fetch()
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
