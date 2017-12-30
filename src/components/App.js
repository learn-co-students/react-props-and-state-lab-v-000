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

  updateAppFilter = selection => {
    this.setState({
      filters: {
        type: selection,
      },
    });
  };

  updateAppPets = pets => {
    this.setState({
      pets: pets
    })
  };

  findPets = () => {
    const selection = this.state.filters.type
    if (selection === 'all') {
      fetch('/api/pets')
        .then(response => response.json())
        .then(response => this.updateAppPets);
    } else {
      fetch(`/api/pets?type=${selection}`)
        .then(response => response.json())
        .then(response => this.updateAppPets);
    }
  };

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
                onChangeType={this.updateAppFilter}
                onFindPetsClick={this.findPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={ pet => this.setState({ adoptedPets: [pet] })}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
