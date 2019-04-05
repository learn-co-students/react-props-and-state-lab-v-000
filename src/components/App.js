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
        type: event.target.value
      }
    })
  }

findPets = () => {
  let path = '/api/pets'

  if (this.state.filters.type !== "all") {
    path += `?type=${this.state.filters.type}`
  }

  fetch(path)
  .then(response => response.json())
  .then((pets) => {
    this.setState({pets})
  })
}

onAdoptPet = (petId) => {
  let pets = this.state.pets.map(p => {
    return p.id === petId ? {...p, isAdopted: true} : p;
  })
  return this.setState({pets})
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.findPets}/>
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