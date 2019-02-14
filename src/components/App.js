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

  componentDidMount() {
    this.getPets();
  }

  updateFilterType = (type) => {
    this.setState({
      filters: {type: type}
    })
  }

  getPets = () => {
    let url = `/api/pets`;
    let type = this.state.filters.type === "all" ? "" : `?type=${this.state.filters.type}`;
    url += type;
    
    fetch(url)
      .then(resp => resp.json())
      .then(json => {
        this.setState({pets:json})
      })
  }

  adopt = (id) => {
    const index = this.state.pets.findIndex(pet => pet.id === id),
          pets = [...this.state.pets]
    pets[index]['isAdopted'] = true
    
    this.setState({pets:pets})
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
              <Filters onChangeType={this.updateFilterType}
                       onFindPetsClick={this.getPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
                          onAdoptPet={this.adopt}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
