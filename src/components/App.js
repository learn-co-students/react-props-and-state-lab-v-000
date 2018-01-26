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
  
  updateState = (value) => {
    this.setState({
      filters: {type: value}
    })
  }

  fetchPets = () => {
    const type = this.state.filters.type
    if (type === "all") {
      fetch('/api/pets')
      .then(response => response.json())
      .then(json => this.setState({pets: data}))
    } else {
      fetch('/api/pets?type=' + type)
      .then(response => response.json())
      .then(json => this.setState({pets: data}))
    }
  }

  adoptedPetID = () => {

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
              <Filters onChangeType={this.updateState} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptedPetID} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
