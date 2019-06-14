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

  onChangeType = (filterVal) => {
    this.setState({
      ...this.state.pets,
      filters: {
        type: filterVal
      }
    })
  }

  handleResponse = (petData) => {
    this.setState({
      pets: petData,
      filters: {
        ...this.state.filters
      }
    })
    console.log(this.state)
  }

  onFindPetsClick = () => {
    switch (this.state.filters.type) {
      case 'all':
        var url = '/api/pets';
        break;
      case 'cat':
        var url = '/api/pets?type=cat';
        break;
      case 'dog':
         var url = '/api/pets?type=dog';
        break;
      case 'micropig':
        var url = '/api/pets?type=micropig';
        break;
    }
  fetch(url)
  .then(res => res.json())
  .then(json => this.handleResponse(json));
  }

  onAdoptPet = (petId) => {
    let petsState = [...this.state.pets]
    let pet = petsState.find(p => p.id === petId)
    pet.isAdopted = true
    this.setState({
      pets: petsState
    })
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
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
