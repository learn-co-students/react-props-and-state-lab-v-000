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

  updateType = (type) => {
    this.setState({
      filters: {
        type: type
      }
    });
  }

  fetchPets = (event) => {
  //  event is the form submission:
  // get type by: let type = event.target.type
    let type = this.state.filters.type
    let url = '/api/pets'
    if (type !== 'all'){
      url += `?type=${type}`
    }
    fetch(url)
    .then(response => response.json())
    .then(petsJson => this.setState({pets: petsJson}))
  }

  handleAdoption = (petId) => {this.setState({adoptedPets: [...this.state.adoptedPets, petId]})}
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType={this.updateType} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoption} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
