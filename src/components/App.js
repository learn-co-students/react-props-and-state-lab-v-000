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

  changeFilter = (event) => {
    this.setState({
      filters: {
        ...this.state.filters,
      type: event.target.value
      }
    })
  }

  fetchMe = () => {
    let url = '/api/pets'
    if (this.state.filters.type != 'all') {
      url += `?type=${this.state.filters.type}`
    }
    fetch(url)
    .then(response => response.json())
    .then(data =>
      this.setState({
        pets: data

    })
    )
  console.log(this.state.pets)
  }

  onAdoptPet = (id) => {
    let petsArray = [...this.state.pets]
    const pet = petsArray.find(p => p.id === id )

    pet.isAdopted = true

    this.setState({
      pets: petsArray
    })
    console.log(this.state.pets)
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


                <Filters onChangeType={this.changeFilter} onFindPetsClick={this.fetchMe}/>

              </div>
              <div className="twelve wide column">
                <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default App
