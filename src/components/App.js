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
// how come i don't need to write e.target.value below?
  handleChangeFilter = type => {
    // debugger;
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type,
      })
    });
  }

// how does this below function know to grab the petId?
  handleAdoption = petId => {
    debugger;
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId]
    });
  }

  fetchPets = () => {
    let apiEndpoint = '/api/pets';

    if (this.state.filters.type !== 'all') {
      apiEndpoint += `?type=${this.state.filters.type}`;
    }

    fetch(apiEndpoint)
      .then(res => res.json())
      .then(pets => {
        // debugger;
        this.setState({pets})
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
              <Filters filters={this.state.filters} onChangeType={this.handleChangeFilter} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoption} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
