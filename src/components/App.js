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

  updateAppFilter = (selection) => {
    this.setState({
      filters: {
        type: selection
      }
    })
  }

  updateApp = () => {
    this.setState({
      pets: pets
    })
  }

  findPets = () => {
    const selection = this.state.filters.type
    if (selection === 'all') {
      fetch('/api/pets')
        .then(resp => resp.json())
        .then(resp => this.updateApp)
    } else {
      fetch(`/api/pets?type=${selection}`)
        .then(resp => resp.json)
        .then(resp => updateApp)
    }
  }

  handleAdoptPet = (petId) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId]
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
              <Filters onChangeType={this.updateAppFilter} onFindPetsClick={this.findPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
