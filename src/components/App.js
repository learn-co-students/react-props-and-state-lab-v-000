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

    // App should pass a callback prop, onChangeType, to <Filters />. This callback needs to update <App />'s state.filters.type
  onChangeType = ( {target: { value } } ) => {
    console.log("onChangeType was called")
    this.setState({ filters: { ...this.state.filters, type: value } });
  }
  
  // <Filters /> needs a callback prop, onFindPetsClick. When the <Filters /> component calls onFindPetsClick, <App /> should fetch a list of pets using fetch().
  fetchPets = () => {
      let endpoint = '/api/pets'
      if (this.state.filters.type !== "all") {
        endpoint += `?type=${this.state.filters.type}`
      }
      
      fetch(endpoint)
        .then(response => response.json())
        .then(pets => this.setState({ pets }))
  } 
    
  onAdoptPet = petID => {
    const pets = this.state.pets.map(pet => {
      return pet.id === petID ? { ...pet, isAdopted: true} : pet;
    });

    this.setState({ pets })
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.fetchPets}/>
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
