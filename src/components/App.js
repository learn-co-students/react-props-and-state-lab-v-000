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

  onChangeType = (filter) => {
    this.setState({
      filters: {type: filter}
    })
  }

<<<<<<< HEAD
  onFindPetsClick = () => {
    let baseAddress = '/api/pets'
    let filterType = this.state.filters.type
    let petAddress = filterType === 'all' ? "" : '?type=' + filterType
    console.log(this.state.filters.type)
    console.log(petAddress)
    fetch(baseAddress + petAddress)
      .then(response => response.json())
      .then(data => this.setState({pets: data})
      )
    console.log(this.state)
=======
  onFindPetsClick = (pets) => {
    let fetchaddress = `/api/pets`
    // ${"?type="+this.state.filters.type unless this.state.filters.type === 'all'}
    fetch(fetchaddress)
      .then(response => response.json())
      .then(data => this.setState({pets: data}))
>>>>>>> b71dfb577cb403723dcc14cfbe5b8b022ccc059e
  }

  onAdoptPet = (petId) => {
    this.setState({
      pets: this.state.pets.map(pet => {
        if (pet.id === petId) {pet.isAdopted = true}
        return pet
      })
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
<<<<<<< HEAD
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
=======
              <Filters onChangeType={this.onChangeType} />
>>>>>>> b71dfb577cb403723dcc14cfbe5b8b022ccc059e
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
