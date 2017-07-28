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
    this.handleFindPets = this.handleFindPets.bind(this);
    this.handleAdoption = this.handleAdoption.bind(this);
  }

  handleFilterChange = (newType) => {
    this.setState ({
      filters: {
        type: newType
      }
    })
  }

  handleFindPets = () => {
    if (this.state.filters.type === 'all') {
      var url = '/api/pets'
    }
    else {
      var url = '/api/pets?type=' + this.state.filters.type
    }

    fetch(url)
    .then(function(response) {
      return response.json()
    })
  }

  handleAdoption = (petId) => {

    this.setState ({
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
              <Filters 
              onChangeType={this.handleFilterChange}
              onFindPetsClick={this.handleFindPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser
              onAdoptPet={this.handleAdoption} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;