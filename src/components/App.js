import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import { getAll } from '../data/pets'

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

  handleChangeType = event  => {
    var filtersValue = {...this.state.filters}
    filtersValue.type = event.target.value
    this.setState({filters: filtersValue})    
  }

  handleFetch = (url) => {
    fetch(url)
    .then(resp => resp.json())
    .then(data => this.setState({pets: data}))
  }

  handleFindPets = () => {
    if(this.state.filters.type === "all"){
    this.handleFetch('/api/pets')
  }if(this.state.filters.type === "cat"){
    this.handleFetch('/api/pets?type=cat')
  }if(this.state.filters.type === "dog"){
    this.handleFetch('/api/pets?type=dog')
  }if(this.state.filters.type === "micropig"){
    this.handleFetch('/api/pets?type=micropig')
  }}

  handleAdoptPet = event => {
    const pets = this.state.pets.map(p => {
    return p.id === event.target.id ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets: pets });
    }
  


  render() {
    // console.log(getAll)
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
              onFindPetsClick={this.handleFindPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets = {this.state.pets}
              onAdoptPet = {this.handleAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
