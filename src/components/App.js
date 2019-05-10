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
      },
      isLoaded: false
    }
  }

  setFilterType = (data, type) => {
    if (type === 'all') {
      return data
    } else {
      return data.filter( pet => pet.type === type )
    }
  }

  onFindPetsClick = () => {
    const type = this.state.filters.type
    let url = ''

    if (type === 'all') {
      url = '/api/pets'
    } else {
      url = `/api/pets?type=${type}`
    }

    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          pets: this.setFilterType(json, type),
        })
      })
    }

  onChangeType = (event) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    });
  }

  changeAdoptionStatus = (petId) => {
    const pets = this.state.pets.map( pet => {
      if (pet.id === petId) {
        return { ...pet, isAdopted: true }
      } else {
        return pet
      }
    });

    this.setState({ pets });
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
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.changeAdoptionStatus} />
            </div>
          </div>
        </div>
        <ul id="petList">

        </ul>
      </div>
    )

  }
}

export default App
