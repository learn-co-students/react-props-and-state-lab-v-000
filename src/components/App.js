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
        type: 'all',
      }
    };
  }

  handlePetChange = (petType) => {
    this.setState({filters: {type: petType}})
  }

  fetchPets = () => {
    const petType = this.state.filters.type
    if (petType === 'all') {
      fetch('/api/pets').then(results => {
        return results.json();
      }).then(data => {
        this.setState({pets: data})
      })
    } else {
      fetch('/api/pets?type=' + petType).then(results => {
        return results.json();
      }).then(data => {
        this.setState({pets: data})
      })
    }
  }

  adoptPet = (petId) => {
    let adoptedPetsArray = this.state.adoptedPets
    adoptedPetsArray.push(petId)
    this.setState({adoptedPets: adoptedPetsArray})
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
              <Filters filters={this.state.filters} onChangeType={this.handlePetChange} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
