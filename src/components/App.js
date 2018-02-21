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

  onChangeType = (selection) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: selection
      }
    })
  }

  onFindPetsClick = () => {
    let url = '/api/pets'
    if(this.state.filters.type === "all"){
      fetch('/api/pets')
      .then(resp => resp.json())
      .then(pets => this.setState({pets}));
    } else {
      fetch('/api/pets?type=' + this.state.filters.type)
      .then(resp => resp.json())
      .then(pets => this.setState({pets}));
    }
  }

  onAdoptPet = event => {
      let pets = this.state.adoptedPets;
      pets.push(event)
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} filters={this.state.filters}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} adoptedPets={this.state.adoptedPets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
