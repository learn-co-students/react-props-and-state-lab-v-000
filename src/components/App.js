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
  handleChangeType = event => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }
  getPets = () => {
    let endPoint = "/api/pets";
    if (this.state.filters.type !== 'all') {
      endPoint = `${endPoint}?type=${this.state.filters.type}`
    }

    let findPets = fetch(endPoint)
      findPets.then(response => response.json())
      .then(foundPets => {
        this.setPets(foundPets)
      })
    }

    setPets = (foundPets) => {
      this.setState({
        pets: foundPets
      })
    }

    onAdoptPet = (petId) => {
      let allPets = this.state.pets;
      let selectedPet = allPets.find( ({ id }) => id === petId);
      selectedPet.isAdopted = true;

    }





  render() {
  //  debugger;
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.handleChangeType}
                onFindPetsClick={this.getPets}
              />
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
