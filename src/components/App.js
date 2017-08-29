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

  handleFilterChange = (type) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: type
      }
    })
  }

  fetchPets = () => {
    let apiUrl = '/api/pets'

    if (this.state.filters.type === 'cat') {
      apiUrl += '?type=cat'
    } else if (this.state.filters.type === 'dog') {
      apiUrl += '?type=dog'
    } else if (this.state.filters.type === 'micropig') {
      apiUrl += '?type=micropig'
    }

    fetch(apiUrl).then(response => {
      this.setState({
        pets: response
      })
    })
  }

  addToAdoptedPets = (id) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
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
              <Filters pets={this.state.pets}
              adoptedPets={this.state.adoptedPets}
              filters={this.state.filters}
              onChangeType={this.handleFilterChange}
              onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
              onAdoptPet={this.addToAdoptedPets}/>
              isAdopted={this.state.adoptedPets}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
