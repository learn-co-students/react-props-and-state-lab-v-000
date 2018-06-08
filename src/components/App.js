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

  changeType = value => {
    this.setState({filters: {type: value}})
  }

  adoptPet = petId => {this.setState({adoptedPets: [...this.state.adoptedPets, petId]})}

  findPets = () => {

    let url = ''

    if(this.state.filters.type === 'all') {
      url = '/api/pets'
    }else{
      url = `/api/pets?type=${this.state.filters.type}`
    }

    return fetch(url)
    .then((response) => response.json())
    .then((pets) => this.setState({pets: pets}))
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
              onChangeType={this.changeType}
              onFindPetsClick={this.findPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
              pets={this.state.pets}
              adoptedPets={this.state.adoptedPets}
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
