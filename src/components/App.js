import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
// App should pass a callback prop, onChangeType, to <Filters />. This callback needs to update <App />'s state.filters.type
// <Filters /> needs a callback prop, onFindPetsClick. When the <Filters /> component calls onFindPetsClick, <App /> should fetch a list of pets using fetch().
// The URL of the API is /api/pets with an optional query parameter.
// Use app's state.filters to control/update this parameter
// If the type is 'all', send a request to /api/pets
// If the type is 'cat', send a request to /api/pets?type=cat. Do the same thing for dog and micropig.
// Finally set <App/>'s state.pets with the results of your fetch request so you can pass the pet data down as props to <PetBrowser />
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

  fetchPets = () => {
    // provide the baseline url
    let url = '/api/pets'
    // adjust url if needed based on selection
     if(this.state.filters.type !== 'all'){
      url += `?type=${this.state.filters.type}`
    }
    // fetch the url
     fetch(url)
    //  render the json
    .then(resp => resp.json)
    // update the state from generated listing
    .then(pets => this.setState({pets}))
  }

  handleAdoptPet = (petId) => {
    let pets = this.state.pets.map(pet => {
      // compare ids, then collect adopted pet      
      return pet.id === petId ? {...pet, isAdopted: true} : pet;
    });
    this.setState({pets})
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
              <Filters onChangeType={this.updateFilterTypes} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
