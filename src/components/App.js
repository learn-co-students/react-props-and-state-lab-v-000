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
  
  onChangeType = (petType) => {
    this.setState ({
      filters: {
	...this.state.filters,
        type: petType
      }
    });
  }
 
  onFindPetsClick = () => {
    var uri = '/api/pets';

    if (this.state.filters.type !== 'all' && this.state.filters.type !== '') {
    	uri += '?type=' + this.state.filters.type;
    }

    fetch(uri)
	  .then(res => res.json())
	  .then(pets => {
		this.setState({ pets })
		console.log(this.state)	   
	  })
  }

  onAdoptPet = petId => {
    const pets = this.state.pets.map(pet => pet.id === petId ? {...pet, isAdopted: true} : pet)
		  
  	this.setState ({
		pets
	})

	  console.log(pets);
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
              <Filters 
	    	filters = {this.state.filters}
	    	onChangeType ={this.onChangeType}
		onFindPetsClick ={this.onFindPetsClick}	        
	      />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
	        pets = {this.state.pets}
	    	onAdoptPet = {this.onAdoptPet}
	      />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
