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

  onChangeType = (event) =>{
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onAdoptPet = id => {
    const pets = this.state.pets.map(pet => { return pet.id === id ? {...pet, isAdopted: true } : pet;})
    this.setState({
      pets: pets
    })
    console.log("I ran")
  }

  // onAdoptPet = (id) => {
  //   this.state.pets[id].this.setState({
  //     pets: {
  //       ...this.state.pets,
  //       onAdoptPet: true
  //     } 
  //   })
    
  // }


 //use fetch() and the current state.filters.type to fetch a list of pets. this function will be called from <filters> component
  onFindPetsClick = () =>{
    let endPoint = `/api/pets`
    if(this.state.filters.type !== 'all'){
      endPoint = `/api/pets?type=${this.state.filters.type}`
    }
    
    fetch(endPoint)
      .then(resp => resp.json())
      .then(resp=> {       
        this.setState({
          pets: resp
        })
      })
  }
  
  // petsArray = Object.keys(resp).map(function(key){
  //   petsArray << resp[key];
  // })
  

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
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



