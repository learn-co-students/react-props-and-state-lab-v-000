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

  handleChangeType = (change) => {
    this.setState({
      filters: {
        type: change
      }
    })
  }

  handleFindPetsClick = () => {
    var url = '/api/pets';
    if (this.state.filters.type !== 'all') {
      url = (`/api/pets?type=${this.state.filters.type}`)
    }
    fetch(url).then(function(response) {
      return response.json
    })

  }

  handleAdoptPet = (pet) => {
    this.setState({
      adoptedPets: this.state.adoptedPets.concat(pet)
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
              onChangeType={this.handleChangeType}
              onFindPetsClick={this.handleFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
              pets={this.state.pets}
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
