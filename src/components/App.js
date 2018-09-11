import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all'
      }
    }
    this.onAdopted = this.onAdopted.bind(this)
  }

setFilter = (type) => {
  this.setState({
    filters: {
      type: type
  }
}, console.log(this.state.filters.type))
}


componentDidMount(){
  let apiGet = '/api/pets'
  fetch(apiGet, console.log(`${apiGet}`))
  .then(results => results.json())
  .then(pets => this.setState({pets: pets}))
}

findPets = () => {
  let apiGet = '/api/pets'
  if(this.state.filters.type !== 'all'){
    apiGet+= `?type=${this.state.filters.type}`
    fetch(apiGet, console.log(`${apiGet}`))
    .then(results => results.json())
    .then(pets => this.setState({pets: pets}))
  }

}

onAdopted = (id) => {
  let pets = this.state.pets.map(pet => {
    if(pet.id === id) {
      pet.isAdopted = true
    }

    return pet
  })

  this.setState({ pets })

  //let pet = this.state.pets.filter(pet => pet.id === id)[0]

  // let pet = this.pet.isAdopted = true
  // let petsUpdated = this.state.pets.filter(pet => pet.id !== id)
  // petsUpdated.push(pet)
  // this.setState({
  //   pets: petsUpdated
  // })
  console.log(this.state);
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
              <Filters onChangeType={this.setFilter} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdopted} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
