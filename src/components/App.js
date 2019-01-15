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

  changeType = (type) => {
    this.setState({filters: {...this.state.filters, type: type}})
  }

  fetchPets = () => {
    let endpoint = '/api/pets'
    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`
    }
    fetch(endpoint)
      .then((response) => response.json())
      .then((responsejson) => {
        this.setState({pets: responsejson})
      })
  }

  adoptPet = (petId) => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? {...p, isAdopted: true} : p;
    })
    this.setState({ pets })

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
              <Filters onChangeType={this.changeType} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
