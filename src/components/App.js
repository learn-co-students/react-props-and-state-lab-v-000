import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      adopted_pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleChangeType = (category) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: category
      }
    })
  }

  handleFindPetsClick = () => {
    let url = '/api/pets'

    if (this.state.filters.type !== 'all') {
      url += '?type=' + this.state.filters.type
    }

    fetch(url)
      .then((resp) => {
        return resp.json()
      })
      .then((data) => {
        data.forEach((pet) => {
          if (this.state.adopted_pets.includes(pet.id)) {
            pet.isAdopted = true
          }
        })

        this.setState({
          pets: data
        })
      })
  }

  handleAdoption = (id) => {
    let adopted_pets = this.state.adopted_pets
    adopted_pets.push(id)

    this.state.pets.forEach((pet) => {
      if (this.state.adopted_pets.includes(pet.id)) {
        pet.isAdopted = true
      }
    })

    this.setState({
      adopted_pets: adopted_pets
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
              <Filters 
                onChangeType={this.handleChangeType} 
                onFindPetsClick={this.handleFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoption} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
