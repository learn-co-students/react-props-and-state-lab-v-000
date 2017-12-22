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
        type: 'all'
      }
    };
  }

  handleFilterChange = type => {
    this.setState({
      filters: {
        ...this.state.filters,
        type
      }
    });
  };

  handleFindPets = () => {
    const type = this.state.filters.onChangeType;
    let url = '/api/pets';

    if (this.state.filters.type !== 'all') {
      url = `${url}?type=${this.state.filters.type}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({ pets }));
  };

  handleAdoptPet = petId => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId]
    });
  };

  render() {
    const { filters, pets, adoptedPets } = this.state;
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                filters={filters}
                onChangeType={this.handleFilterChange}
                onFindPetsClick={this.handleFindPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={pets}
                adoptedPets={adoptedPets}
                onAdoptPet={this.handleAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
