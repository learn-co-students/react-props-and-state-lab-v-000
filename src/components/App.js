import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import { getAll } from '../data/pets';

class App extends React.Component {
  constructor() {
    super()
    
    this.state = {
      pets: getAll(),
      filters: {
        type: 'all'
      }
    }
  }
  
  onChangeType = (event) => {
//	  debugger
    this.setState ({
      filters: {
	...this.state.filters,
        type: event.target.value
      }
    });
  }
 
  onFindPetsClick = (state) => {
    var uri = '/api/pets';
//    debugger 
    if (state.type !== 'all' && state.type !== '') {
	    uri += '?type=' + state;
    }
//	debugger
    fetch(uri)
	  .then(res => res.json())
	  .then(pets => console.log(pets))
		 // { 
		 // this.setState ({
		//	  ...this.state.pets,
		//	  pets: getAll(),
		//  })
	//debugger	
	//	  console.log(res)
	//  })
  }

  onAdoptPet = (id) => {
    const updatePets = [...this.state.pets];
	  updatePets.forEach((pet) => {
                    if (pet.id === id) {
                      pet.isAdopted = true;
                    }
            })

	  this.setState ({
		...this.state.pets,
	    	pets: updatePets,
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
