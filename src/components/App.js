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
        type: event.target.value,
      }
    });
  }

  onFindPetsClick = (event) => {
    let url = "/api/pets"
    let typeurl = url + "?type=" + this.state.filters.type
    if (this.state.filters.type === 'all') {
      fetch(url)
      .then(response => response.json())
      .then(json => this.setState({
          pets: json,
       })
      )
    } else {
      fetch(typeurl)
      .then(response => response.json())
      .then((json) => this.setState({
          pets: json,
        })
      )
    }
  }

  onAdoptPet = (id) => {
    let selectedPet= this.state.pets.map(pet => {return pet.id === id ? {...pet, isAdopted: true} : pet})

    this.setState({
      pets: selectedPet,
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
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
