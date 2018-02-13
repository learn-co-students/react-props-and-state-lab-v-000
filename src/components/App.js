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

  searchPets = () => {
    let petsUrl = `/api/pets`;

    if(this.state.filters.type !== 'all') {
      petsUrl = `${petsUrl}?type=${this.state.filters.type}`;
    }

    fetch(petsUrl).then(res => res.json).then(pets => this.setState({pets}));
  }

  changeFilterType = (type) => {
    this.setState({
      filters: Object.assign(this.state.filters, {
        type: type
      })
    })
  }

  adoptAPet = (petId) => {
     this.setState({
       adoptedPets: [...this.state.adoptedPets, petId],
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
              onChangeType={this.changeFilterType}
              onFindPetsClick={this.searchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser
              pets={this.state.pets}
              adoptedPets={this.state.adoptedPets}
              onAdoptPet={this.adoptAPet}
               />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
