import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  handleChangeType=(event)=>{
      console.log(this.state);
        this.setState({
            filters: {
                ...this.state.filters,
                type:event.target.value
                }
        })
  }
  buildFindPetsUrl=()=>{
      let petsUrl=`/api/pets`;
      return this.state.filters.type==="all"?petsUrl:`${petsUrl}?type=${this.state.filters.type}`
    
  }
  handleFindPetsClick=(event)=>{
        fetch(this.buildFindPetsUrl())
        .then(resp=>resp.json())
        .then(json=>this.setState({
            pets: json
        }))
  }
  handleOnAdoptPet=(id)=>{
      let pet = this.state.pets.find(pet=>pet.id===id);
      pet.isAdopted=true;
      this.setState({
          ...this.state.pets,
          pet
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
              onChangeType={this.handleChangeType}
              onFindPetsClick={this.handleFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handleOnAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
