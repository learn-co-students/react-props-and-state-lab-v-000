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

  handleChangeType = e => {
    this.setState({filters: {...this.state.filters,
      type: e }})
  }

  handleFindPet = () => {
    let url = '/api/pets'

    if (this.state.filters.type !== "all") {
      url += `?type=${this.state.filters.type}`}

    fetch(url)
    .then(res => res.json())
    .then(res => this.setState({pets: res}))
  }

  handleAdoption = e => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, e]
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
              <Filters filters={this.state.filters} 
              onChangeType={this.handleChangeType}
              onFindPetsClick={this.handleFindPet}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handleAdoption} 
              pets={this.state.pets}
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
