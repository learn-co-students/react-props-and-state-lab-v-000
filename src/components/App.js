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

  handleFilter = (type) => {
    let currentType = type.target.value
    this.setState({
      filters: {...this.state.filters, type: currentType}
    })
  }

  handleFind = () => {
    if (this.state.filters.type === "all") {
    fetch('/api/pets')
    .then(results => results.json())
      .then(array => this.setState({pets: array}))
  }
    else if (this.state.filters.type === "cat") {
      fetch('/api/pets?type=cat')
      .then(results => results.json())
        .then(array => this.setState({pets: array}))
    }
    else if (this.state.filters.type === "dog") {
      fetch('/api/pets?type=dog')
      .then(results => results.json())
        .then(array => this.setState({pets: array}))
    }
    else if (this.state.filters.type === "micropig") {
      fetch('/api/pets?type=micropig')
      .then(results => results.json())
        .then(array => this.setState({pets: array}))
    }

  }

  onAdoptPet = petId => {
   const pets = this.state.pets.map(p => {
     return p.id === petId ? { ...p, isAdopted: true } : p;
   });
   this.setState({ pets });
 };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleFilter} onFindPetsClick={this.handleFind}/>
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
