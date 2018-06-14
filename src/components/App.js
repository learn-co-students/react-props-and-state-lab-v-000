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

  handleChangeFilter = type => {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type
      })
    })
  }

  fetchPets = e => {
    const petType = this.state.filters.type
    const url = petType === "all" ? '/api/pets' : `/api/pets?type=${petType}`
    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({pets}))
  }

  handlePetAdoption = id => {
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
              <Filters
                filters={this.state.filters}
                onChangeType={this.handleChangeFilter}
                onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.handlePetAdoption}
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
