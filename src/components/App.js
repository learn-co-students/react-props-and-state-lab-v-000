import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';
import "whatwg-fetch";

class App extends React.Component {
  constructor() {
    super();

    // create state to keep track of
    this.state = {
      pets: [],
      adoptedPets: [],
      filters:{
        type: 'all',
      }
    };
  }

  getPets = () => {
    var baseUrl = "/api/pets";

    if(this.state.filters.type !== 'all'){
      baseUrl += `?type=${this.state.filters.type}`
    };

    fetch(baseUrl)
      .then(res => res.json())
      .then(pets => {
        console.log(pets)
        this.setState({pets})
      })
  }


  handleChangeFilterType = (type) => {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type,
      })
    });
  }

  handleAdoptPet = (petId) => {
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
                onChangeType={this.handleChangeFilterType}
                onFindPetsClick={this.getPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
                          adoptedPets={this.state.adoptedPets}
                          onAdoptPet={this.handleAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;