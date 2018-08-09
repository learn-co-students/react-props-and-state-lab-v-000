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
  
  
  onChangeType=(event)=>{
    this.setState({
      pets: {...this.state.pets},
      filters:{
        //What's the type we're supposed to set here?
        type: this.target.type,
      }
    })
  }
  
  onFindPetsClick=(event)=>{
    let urlString="/api/pets"
    if(this.state.filters.type!=="all"){
      const queryString="?type="+this.state.filters.type;
      urlString=urlString+queryString;
    }
    fetch(urlString).then(results=>{
      this.setState({
        pets: {results},
        filters: {...this.state.filters}
      })
    })
    
  }
  
  onAdoptPet=(petId)=>{
    let pets=this.state.pets
    let activePet=pets.find(pet=>{
      return pet.id===petId
    })
    activePet.isAdopted=true
    pets=[activePet]
    this.setState({
      pets: pets,
      filters: {...this.state.filters}
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
              <Filters onChangeType={this.onChangeType}onFindPetsClick={this.onFindPetsClick}/>
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
