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
  onChangeType(event){
    this.setState(
      {
          ...this.state,
          filters: {
            type: event.target.value,
          }
      }
    )
  }
  
  onFindPetsClick(e){
    let path = (this.state.filters.type === 'all')? "": `?type=${this.state.filters.type}`
    fetch('/api/pets'+ path)
            .then(response => response.json())
            .then(result => {
              if(path===""){
                this.setState({pets: result})
              }else{
              let filtered = result.filter((pet)=>pet.type===this.state.filters.type)
                this.setState({pets: filtered})
              }
            })
            .catch(e => {
                console.log(e);
            });

  }

  onAdoptPet(id){
    console.log('id',id)
    let updated = this.state.pets.filter((pet)=>pet.id===id)[0]
    updated.isAdopted = true
    this.setState(
      {
          ...this.state
      }
    )
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
              <Filters onChangeType={(e)=>this.onChangeType(e)} onFindPetsClick={(e)=>this.onFindPetsClick(e)} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={(e)=>this.onAdoptPet(e)} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
