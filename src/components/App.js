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

  onChangeType = (event) => {
    //event.target.value = "cat"
     
    this.setState({
      filters: {
        type: event.target.value
      }
    });
  }

  onFindPetsClick = (event) => {
    //should fetch a list of pets using fetch()
    let url = "/api/pets"

    //send a fetch request 
    if (this.state.filters.type !== "all") {
      url += `?type=${this.state.filters.type}`
    } 

    const configObj = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Accepts": "application/json"
        }
    }

    fetch(url, configObj)
    .then(res => res.json())
    .then(json => {
       this.setState({
         pets: json
       })
    })
    // Set <App/>'s state.pets with the results of your fetch request so you can pass the pet data down as props to <PetBrowser />
  }

  onAdoptPet = (petId) => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets: pets });
  };
 //This callback should take in an id for a pet, 
 //find the matching pet in state.pets 
 //and set the isAdopted property to true.


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
                onChangeType={this.onChangeType} 
                onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
