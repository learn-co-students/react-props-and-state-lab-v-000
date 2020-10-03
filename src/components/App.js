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

  handleFilterChange = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    });
  }

  handleFindPets = () => {
    let URL;
    if (this.state.filters.type === "all"){
      URL = '/api/pets'
    } else if (this.state.filters.type === "cat"){
      URL = '/api/pets?type=cat'
    } else if (this.state.filters.type === "dog"){
      URL = '/api/pets?type=dog'
    } else {
      URL = '/api/pets?type=micropig'
    }
    fetch(URL)
    .then(data => data.json())
    .then(data => this.setState({
      pets: data
    }))
  }


  onAdoptPet = (id) => {
    const updatedPets = this.state.pets.map(item => {
      if (item.id === id) {
         return { ...item, isAdopted: true }
      } else {
         return item
      }
    });
    this.setState(
      {pets: updatedPets}
    )
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
              <Filters onChangeType={this.handleFilterChange} onFindPetsClick={this.handleFindPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet = {this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
