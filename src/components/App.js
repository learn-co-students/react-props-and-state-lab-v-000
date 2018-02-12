import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';
import { getAll, getByType } from '../data/pets';

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

  handleTypeChange = (val) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: val,
      }
    })
  }

  handleFindPetsClick = () => {
    let url = '/api/pets';
    if (this.state.filters.type !== 'all') {
      url = `${url}?type=${this.state.filters.type}`;
    }

    fetch(url)
      .then((r) => {
        this.setState({
          pets: r,
        })
      })
  }

  handleAdoptPet = (id) => {
    let adoptedPets = this.state.adoptedPets;
    adoptedPets.push(id);

    this.setState({
      adoptedPets: adoptedPets,
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
                filters={this.state.filters}
                onChangeType={this.handleTypeChange}
                onFindPetsClick={this.handleFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                adoptedPets={this.state.adoptedPets}
                onAdoptPet={this.handleAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
