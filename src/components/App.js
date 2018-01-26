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

  fetchPets = () => {
    let url = '/api/pets';

    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`;
    }

    fetch(url)
      .then(response => response.json())
      .then(pets => this.setState({ pets }));
  }

  changeType(value) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: value
      })
    })
  }

  adoptPet = (petId) => {
    this.setState({
      isAdopted: Object.assign({}, this.isAdopted, true),
      adoptedPets: [...this.state.adoptedPets, petId],
    })
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
              filters={this.state.filters}
              onChangeType={this.changeType.bind(this)}
              onFindPetsClick={this.fetchPets}
            />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
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
