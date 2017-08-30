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

    this.setTypeState = this.setTypeState.bind(this);
    this.findPets = this.findPets.bind(this);
    this.adoptPet = this.adoptPet.bind(this);
    this.storePets = this.storePets.bind(this);
  }

  setTypeState(val){
    this.setState({filters: {type: val} });
  }

  findPets(){
    //figure out what url to fetch from
    var url = this.state.filters.type === 'all' ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`;
    //fetch the data
    fetch(url).then(
      //then set the state for pets
      function(response){
        return response.json();
      });
  }

  storePets(p){
    this.setState({pets: p})
  }

  adoptPet(id){
    var adoptedNow = this.state.adoptedPets;
    adoptedNow.push(id);
    this.setState({adoptedPets: adoptedNow});
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
                filters={this.state.filters.type}
                onChangeType={this.setTypeState}
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
