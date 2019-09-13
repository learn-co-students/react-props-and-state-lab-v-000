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

  filter = (event) => {
    this.setState({
      filters: {
        type: event.target.value 
      }
    });
  };

  findPets = () => {
    let url = "/api/pets";
    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`;
    }
    fetch(url)
      .then( res => res.json())
      .then( res => this.setState(
        { pets: res }
      ));
  };

  onAdoptPet = (petID) => {
    console.log('Adopted!');
    const newPets = this.state.pets.map(pet => {
      if (pet.id === petID) {
        pet.isAdopted = true;
        return pet;
      } else {
        return pet;
      }
    });
    this.setState({newPets});
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
              <Filters onChangeType={this.filter} onFindPetsClick={this.findPets} />
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
