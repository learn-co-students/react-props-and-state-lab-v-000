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

  onAdoptPet = (id) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    });
  }

  onChangeType = (value) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: value
      }
    });
  }

  onFindPetsClick = () => {
    const queryParam = this.state.filters.type === "all" ? '' : `?type=${this.state.filters.type}`
    fetch(`/api/pets${queryParam}`)
      .then(res => res.json())
      .then(petList => {
        this.setState({
          pets: petList
        });
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
              <Filters
                filters={this.state.filters}
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
                adoptedPets={this.state.adoptedPets}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
