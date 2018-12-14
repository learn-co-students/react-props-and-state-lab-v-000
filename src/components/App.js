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

onChangetype = event =>{
  this.setState({filters: {...this.state.filters, type: event.target.value}})
}

fetchAllPets = () => {
  let url = '/api/pets'

  if(this.state.filters.type !== 'all'){
    url += `?type=${this.state.filters.type}`
  }
  //fetches from api
  fetch(url)
    .then(res => res.json())
    .then(allPets => this.state({allPets}))
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
              <Filters onChangetype={this.onChangetype} onFindPetsClick={this.fetchAllPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
