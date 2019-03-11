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
      // The URL of the API is /api/pets with an optional query parameter
      filters: {
        // If the type is 'all', send a request to /api/pets
        // If.../api/pets?type=cat
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    event.preventDefault()
    const petType = event.target.value
    console.log(petType)
    this.setState({
      filters: { type: petType }
    })
  }

  render() {
    console.log(this.state.filters)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              // update state.filters.type // fetch a list of pets using fetch()
              <Filters onChangeType={this.onChangeType} onFindPetClick={this.onFindPetClick}/>
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
