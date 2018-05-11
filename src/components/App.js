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

  updateFilterState = (selected) => {
    this.setState({
      ...this.state,
      filters: {
        type: selected
      }
    })
  }

  adoptPet = (petId) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId]
    })
  }

  fetchPets = () => {
    let url = '/api/pets';
    if (this.state.filters.type === 'cat') {
      url += '?type=cat';
    } else if (this.state.filters.type === 'dog') {
      url += '?type=dog';
    } else if (this.state.filters.type === 'micropig') {
      url += '?type=micropig';
    }

    fetch(url)
      .then(response => response.json())
      .then(pets => this.setState({pets}));
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
                value={this.state.filters}
                onChangeType={this.updateFilterState}
                onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                adoptedPets={this.state.adoptedPets}
                onAdoptPet={this.adoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
