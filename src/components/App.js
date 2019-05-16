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
    this.onAdoptPet = this.onAdoptPet.bind(this)
  }


  onFindPetsClick = () => {
    const petType = this.state.filters.type;
    const petURL = petType==='all' ? '/api/pets' : `/api/pets?type=${petType}`;

    // console.log(petURL);

    fetch(petURL, {
      method: 'GET'
    }).then(res => res.json())
    .then(json => this.updatePetsFromAPI(json));
  }


  updatePetsFromAPI(json) {
    this.setState(
      {pets: json}
    )
    // console.log(this.state.pets)
  }


  onChangeType = (event) => {
    this.setState(
      {filters: 
        {type: event.target.value}
      }, () => {
        // console.log(this.state.filters.type)
      }
    )
  }

  onAdoptPet = (id) => {
    let newPetsArray = [...this.state.pets]
    let pet = newPetsArray.find((pet) => pet.id===id);
    pet.isAdopted = true;

    this.setState({
      pets: newPetsArray
    }, () => {
      // console.log(pet.isAdopted)
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
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType}/>
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
