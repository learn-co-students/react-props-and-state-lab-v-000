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

  handleChangeType = (e) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: e.target.value
      }
    }, () => console.log(this.state))
  }

  handleFindPetsClick = () => {
    let url = '/api/pets'
    if (this.state.filters.type !== 'all') {
      url += '?type=' + `${this.state.filters.type}`
    }
    fetch(url)
    .then(response => response.json())
    .then((pets) => {
      this.setState({
        pets: pets
      }, () => console.log(this.state))
    })
  }

  handleAdoptPet = (id) => {
    const pets = this.state.pets.map(p => {
      return p.id === id ? { ...p, isAdopted: true } : p;
    });
    this.setState({pets: pets});
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
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handleFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
