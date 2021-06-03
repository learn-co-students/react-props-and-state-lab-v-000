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

  fetchPets = ()=> {
    if (this.state.filters.type === 'all') {
      return fetch("/api/pets").then(resp=>resp.json()).catch(error=> console.error(error))
    } else {
      return fetch(`/api/pets?type=${this.state.filters.type}`).then(resp => resp.json()).catch(error => console.error(error))
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
            <div className="four wide column">
              <Filters 
                onChangeType={(type)=> this.setState(state=> {state.filters.type = type; return state})}
                onFindPetsClick={()=> this.fetchPets().then(pets=> this.setState({pets: pets}))}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={(id)=> {this.state.pets.find(pet=> pet.id === id).isAdopted = true} }/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
