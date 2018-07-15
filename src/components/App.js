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

  onChangeType = e => {
    this.setState({
    filters: {...this.state.filters,
          type: e}})
  }
  
  onFindPetsClick = () => {
    let url = '/api/pets'
    if(this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    }

    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({pets: data}) )
  }

onAdoptPet = (petId) => {
  const allPets = this.state.pets
  for (var i in allPets) {
    if (allPets[i]['id'] === petId) {
       allPets[i]['isAdopted'] =  true 
    }
  }
}

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column" >
              <Filters value={this.state.filters.type} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
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
