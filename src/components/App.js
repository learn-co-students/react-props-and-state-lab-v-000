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
        ...this.state.filters,
        type: event.target.value
      }
    })
  }

  onAdoptPet = (id) => {
    const index = this.state.pets.findIndex(pet => pet.id === id)
    this.setState({
      pets: [
        ...this.state.pets.slice(0,index),
         Object.assign({}, this.state.pets[index], {isAdopted: true}),
         ...this.state.pets.slice(index+1)
      ]
    })
  }

  onFindPetsClick = () => {
    let url = '';
    const type = this.state.filters.type
    if (type === 'cat') {
      url = '/api/pets?type=cat';
    }else if (type === 'dog') {
      url = '/api/pets?type=dog'
    }else if (type === 'micropig') {
      url = '/api/pets?type=micropig'
    }else {
      url = '/api/pets'
    }
    fetch(url)
    .then(response => response.json())
    .then(pets => this.setState({ pets: pets }))
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
