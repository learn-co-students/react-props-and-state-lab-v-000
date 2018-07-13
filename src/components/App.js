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

    this.onChangeType = this.onChangeType.bind(this);
    this.onFindPetsClick = this.onFindPetsClick.bind(this);
  }

  onChangeType = e => {
    this.setState({
      filters: {type: e.target.value}
    })
  }

  onFindPetsClick = () => {
    const petsUrl = (this.state.filters.type === 'all' ? '/api/pets' : `/api/pets?=${this.state.filters.type}`)
    fetch(petsUrl)
      .then( res => res.json() )
      .then( pets => this.setState({pets}))
  }

  onAdoptPet = petId => {
    this.setState({
      pets: this.state.pets.map( p => p.id === petId ? {...p, isAdopted: true} : p )
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
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
