import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
      super();

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
    
   handleFilterChange = (event) => {
      this.setState({
        filters: {
          ...this.state.filters,
          type: event.target.value
        }
      })
    }
    
    handleFindPets = () => {
       let url = '/api/pets'

       if (this.state.filters.type !== 'all') {
         url += `?type=${this.state.filters.type}`
       }

       fetch(url)
       .then(response => response.json())
       .then(pets => {
         this.setState({
           pets: pets
         })
       })
     }

     handleAdoptPet = (id) => {
       let petsCopy = [...this.state.pets]
       const thePet = petsCopy.find(pet => pet.id === id)
       thePet.isAdopted = true
       this.setState({
         pets: petsCopy
       })
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
                  onChangeType={this.handleFilterChange}
                  onFindPetsClick={this.handleFindPets}
                />
              </div>
              <div className="twelve wide column">
                <PetBrowser
                  onAdoptPet={this.handleAdoptPet}
                  pets={this.state.pets}
                />
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  export default App
