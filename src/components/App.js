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

  onChangeType = event => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })
  }

  onFindPetsClick = event => {
    let url = '/api/pets'

    if (this.state.filters.type === 'all') {
      fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ pets: [...data] }))
    } else {
      fetch(`${url}?type=${this.state.filters.type}`)
        .then(response => response.json())
        .then(data => this.setState({ pets: [...data] }))
    }
  }

  adoptingPets = id => {
    const adoptedPets = this.state.pets.map(pet =>
      pet.id === id ? {...pet, isAdopted: true} : pet
    )
    this.setState({
      pets: adoptedPets
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
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={id => this.adoptingPets(id)} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
