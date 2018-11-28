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

  updateFilters = event => {
    //console.log(event.target.value)
    this.setState({
      filters: {

        type: event.target.value,
      }
    })
  }

  findPets = () =>  {
    const pet = this.state.filters.type;
    let url = '/api/pets'
    if(pet !== 'all'){
       url = `/api/pets?type=${pet}`
    }
    fetch(url)
    .then(results => results.json())
    .then(pets => this.setState({pets}))
  }

  onAdoptPet = (id) => {
    //debugger;
    alert(id)
   const pets = this.state.pets.map(p => {
     return p.id === id ? { ...p, isAdopted: true } : p
   });
   //debugger;
   this.setState({ pets });
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
              <Filters onChangeType={this.updateFilters} onFindPetsClick={this.findPets}/>
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
