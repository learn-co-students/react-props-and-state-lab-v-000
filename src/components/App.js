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

  onChangeType = (value) => {
    this.setState(({filters}) => ({filters: {
      ...filters,
      type: value,
    }}));      
  }

  onFindPetsClick = (event) => {
    // If the type is 'all', send a request to /api/pets
    const petType = this.state.filters.type
    let url = '/api/pets'
    if (petType !== 'all') {
      fetch(`${url}?type=${petType}`).then(response => response.json()).then((pets) => {this.setState({pets: pets})})
    } else {
      fetch(url).then(response => response.json()).then((pets) => {this.setState({pets: pets})})
    }
  } 

  onAdopt = (petId) => {
    debugger
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId]
    }); 
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
              <Filters onChangeType={this.onChangeType} filters={this.state.filters.type} onFindPetsClick={this.onFindPetsClick.bind(this)} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdopt.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;