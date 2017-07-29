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

    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleFindPetsClick = this.handleFindPetsClick.bind(this);
    this.handleAdoption = this.handleAdoption.bind(this);
  }

  handleChangeType(newType) {
    this.setState({
      filters: {
        type: newType
      }
    });
  }

  handleFindPetsClick() {
    var url = "";

    if (this.state.filters.type === 'all') {
      url = '/api/pets';
    } else {
      url = '/api/pets?type=' + this.state.filters.type
    }

    fetch(url)
    .then(function(response) {
      return response.json();
    });
  }

  handleAdoption(petId) {
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
              <Filters
                filters={this.state.filters}
                onChangeType={this.handleChangeType}
                onFindPetsClick={this.handleFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.handleAdoption}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
