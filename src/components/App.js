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

  changeType = ev => {
    this.setState({ filters: { type: ev.target.value } })
  }

  handleAdoptPet = id => {
    const pet = this.state.pets.find(p => p.id === id)
    pet.isAdopted = true
    this.forceUpdate()
  }

  handleFindPetsClick = () => {
    const filterType = this.state.filters.type
    const url =
      filterType === 'all'
      ? `/api/pets`
      : `/api/pets?type=${filterType}`


    fetch(url)
    .then((r) => {
      return r.json()
     })
    .then((json) => {
      this.setState({pets: json})
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
                onChangeType={this.changeType}
                onFindPetsClick={this.handleFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.handleAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
