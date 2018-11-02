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

  onFindPetsClick = () => {
    if(this.state.filters.type !== "all") {
      var petUrl = `?type=${this.state.filters.type}`
    } else {
      var petUrl = ''
    }
    fetch(`/api/pets${petUrl}`).then(resp => resp.json()).then(petsJSON => {
      this.setState({pets})
    })
  }

  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onAdoptPet = (petID) => {
    var pet = this.state.pets.find(pet => {pet.id === petID});
    var newPet = Object.assign({isAdopted: true}, pet)
    this.setState({
      pets:[
        ...this.state.pets,
        newPet
      ]
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
              <Filters onFindPetsClick={this.onFindPetsClick}
                onChangeType={this.onChangeType}/>
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
