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

    this.handleFilterTypeChange = this.handleFilterTypeChange.bind(this);
    this.fetchPets = this.fetchPets.bind(this);
    this.handleAdoptPet = this.handleAdoptPet.bind(this);
  }

  handleFilterTypeChange(type){
    this.setState({filters: {...this.state.filters, type: type}});
  }

  fetchPets(){
    let url = '/api/pets'; //default url to fetch all
    if (this.state.filters.type !== 'all') { //optional query
      url += `?type=${this.state.filters.type}`;
    }

    return fetch(url)
      .then( response => response.json())
      .then( pets => this.setState({pets}));
  }

  handleAdoptPet(id){
    this.setState({adoptedPets: [...this.state.adoptedPets, id]});
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
                onChangeType={this.handleFilterTypeChange}
                onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.handleAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
