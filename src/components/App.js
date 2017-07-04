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

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.fetchPets = this.fetchPets.bind(this);
    this.handleAdoption = this.handleAdoption.bind(this);
  }

  handleFilterChange(type) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type,
      })
    });
  }

  handleAdoption(id) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id],
    });
  }

  fetchPets() {
    let url= '/api/pets'
     if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`;
    }

    fetch(url)
      .then(response => response.json())
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
              filters = {this.state.filters}
              onChangeType = {this.handleFilterChange}
              onFindPetsClick = {this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
              pets = {this.state.pets} 
              adoptedPets = {this.state.adoptedPets}
              onAdoptPet ={this.handleAdoption}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;