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

  updateFilter = function (type) {
    this.setState({ filters: { type: type} })
  }.bind(this);
  
  adoptPet= function (petId) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId],
    })
  }.bind(this);

  getResults = function (e) {
    let filterText = this.state.filters.type;

    if(filterText && filterText !== 'all'){
      const data = fetch('/api/pets?type=' + filterText);

      this.setState({
        pets: data
      })
    }else{
      this.setState({
        pets: fetch('/api/pets')
      })
    }

  }.bind(this);

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType={this.updateFilter} onFindPetsClick={this.getResults}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
