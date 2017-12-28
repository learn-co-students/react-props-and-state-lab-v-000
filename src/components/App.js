import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all'
      }
    };
  }

  fetchPets = () =>{
    const petType = this.state.filters.type
    const PET_TYPES = ['dog', 'cat', 'micropig']
    let uri = '/api/pets'
    if (PET_TYPES.includes(petType)) uri = uri + "?type=" + petType
    fetch(uri).then(resp => {
      return resp.json()
    }).then(resp=>{
      this.setState({
        pets: resp
      })
    })
  }

  changeType = (target)=>{
    this.setState({
      filters:{
        ...this.state.filters,
        type: target
      }
    })
  }

  adoptPet = (petId)=>{
    let currentPets = this.state.adoptedPets
    this.setState({
      adoptedPets: currentPets.push(petId)
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
              <Filters onChangeType={this.changeType.bind(this)} onFindPetsClick={this.fetchPets.bind(this)} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
