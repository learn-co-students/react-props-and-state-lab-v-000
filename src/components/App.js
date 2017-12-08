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

  handleChangeType = (type) => {
    this.setState({
     filters: {
       ...this.state.filters,
       type: type
     }
    });
  }

  setPets = (pets) => {
    this.setState({
      pets: pets
    });
  }

  findPets = () => {
    let url = this.state.filters.type == 'all' ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`
    fetch(url)
    .then(res => res.json())
    .then(pets => this.setPets(pets));
  }

  handlePetAdopt = (petId) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId]
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
                onChangeType={ this.handleChangeType }
                filters={ this.state.filters.type }
                onFindPetsClick={ this.findPets }
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                onAdoptPet={ this.handlePetAdopt }
                adoptedPets={ this.state.adoptedPets }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
