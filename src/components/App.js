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

  changingType = event =>{
    console.log(event.target.value)
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  findingPetsClick = () =>{
    //fetch pets
    let rootURl = "/api/pets"
    console.log("button works")
    //console.log(this.state)
  
    if (this.state.filters.type === "all"){
      fetch(rootURl)
      .then(resp => resp.json())
      .then(json => {
        
        this.setState({
          pets: json
        })
        //console.log(this.state)
      })
    } else {
      fetch(rootURl += `?type=${this.state.filters.type}`)
      .then(resp => resp.json())
      .then(json => {
        
        this.setState({
          pets: json
        })
        //console.log(this.state)
      
      })
    }
  }//end of findingPets

  adoptingPet = (petId) => {
    console.log("adopted clicked!")
    //let selectedPet = this.state.pets.find(pet => pet.id == petId)
    //change selected pets adoption
    
    //console.log(selectedPet)
    const pets = this.state.pets.map(p => {
      return p.id === petId ? {...p, isAdopted: true} : p;
    });
    this.setState({pets: pets});
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
              <Filters onChangeType={this.changingType} onFindPetsClick={this.findingPetsClick}/>
            </div>
            <div className="twelve wide column">
              {/* ...with the results of your fetch request so you can pass the pet data down as props to <PetBrowser />*/}
              <PetBrowser onAdoptPet={this.adoptingPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
