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

    this.handleAdoptPet = this.handleAdoptPet.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
    this.fetchSearch = this.fetchSearch.bind(this);
  }

  handleAdoptPet = (event) => {
  }

  handleChangeType = (event) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event,
      }
    }, () => {console.log("filter state set to " + this.state.filters.type)})
  }

  fetchSearch = (query) => {
    let uri = '/api/pets';
    if (query) {
      fetch(uri)
        .then(response => response.json())
        .then(petsResponse => this.setState({
          pets: petsResponse
        }))
    } else {
      uri += `?type=${query}`;
      debugger
      fetch(uri)
        .then(response => response.json())
        .then(petsResponse => this.setState({
          pets: petsResponse
        }))
    }
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
              <Filters filters={this.state.filters} onChangeType={this.handleChangeType} onFindPetsClick={this.fetchSearch(this.state.filters.type)}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handleAdoptPet} pets={this.state.pets} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
