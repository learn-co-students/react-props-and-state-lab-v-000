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

    fetchPets = () => {  
       let api = '/api/pets'  
        if (this.state.filters.type != "all") {
          api = `/api/pets?type=${this.state.filters.type}`
        }
      fetch(api)
     }

   adoptedStatus = (petId) => {
    
    const pets = this.state.pets.map(selectedPet => {
         return  selectedPet.id ==  petId  ? {...selectedPet, isAdopted: true}  : selectedPet
     })
        this.setState({pets})
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

              <Filters onFindPetsClick = {this.fetchPets} />

            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet = {this.adoptedStatus} pets = {this.state.pets} />
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
