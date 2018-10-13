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
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  fetchPets = (url) => {
    fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then((myJson) => {
      this.setState({pets: myJson})
    })
  }

  onFindPetsClick = () => {
    if (this.state.filters.type === "all") {
      this.fetchPets('/api/pets');
    } else {    
      this.fetchPets('/api/pets?type=' + this.state.filters.type);
    }
  }

  onAdoptPet = (id) => {
    const pets = this.state.pets;
    for (let pet in pets) {
      if (pets[pet].id == id) {
        pets[pet].isAdopted = true;
      }
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
