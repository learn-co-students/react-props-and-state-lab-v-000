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

  onChangeType = (e) => {
    const petType = e.target.value;
    this.setState({...this.state, filters: {type: petType}});
  }

  onFindPetsClick = () => {
    let url;
    if (this.state.filters.type === 'all') {
      url = '/api/pets';
    } else {
      url = `/api/pets?type=${this.state.filters.type}`;
    }
    fetch(url).then(resp => resp.json()).then(json => this.setState({ pets: json}));
  }

  onAdoptPet = (id) => {
    let petsCopy = this.state.pets;
    for(let pet of petsCopy){
      if (pet.id === id){
        pet.isAdopted = true;
      }
    }
    
    this.setState({...this.state, pets: petsCopy});
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
