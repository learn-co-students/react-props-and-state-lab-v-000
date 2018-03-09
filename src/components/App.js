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

  petsFetch = () => {
    if (this.state.filters.type !== 'all') {
      fetch (`/api/pets?type=${this.state.filters.type}`)
      .then(res => res.json())
      .then(pets => this.setState({pets}));
    } else {
       fetch('/api/pets')
      .then(res => res.json())
      .then(pets => this.setState({pets}));
    };
  };

  handleFilter = type => {
    this.setState({
      filters: {
         ...this.state.filters, type: type
      } 
    });
  };

  handleAdopt = petId => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId],
    });
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
                onChangeType={this.handleFilter}
                onFindPetsClick={this.petsFetch}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                 pets={this.state.pets} 
                 adoptedPets={this.state.adoptedPets} 
                 onAdoptPet={this.handleAdopt}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;