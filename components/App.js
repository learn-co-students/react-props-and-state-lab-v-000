import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };

    this.updateFilters = this.updateFilters.bind(this); 
    this.getPets = this.getPets.bind(this); 
    this.adoptPet = this.adoptPet.bind(this); 
  }

  updateFilters(type) {
    this.setState({
       filters: Object.assign({}, this.state.filters, {
          type: type, 
       }) 
    }); 
  }

  getPets() {
    var type = this.state.filters.type;  
    var url = '/api/pets'
    if (type !== 'all') { 
      url = url + '?type=' + type; 
    }   
    fetch(url)
      .then(function(response) {
        return response.json(); 
      }).then(function(pets) {
        this.setState({ pets  }); 
        return; 
      })
  }


  adoptPet(petId){
    var arr = this.state.adoptedPets.concat(petId); 
    this.setState({
      adoptedPets: arr,  
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
              <Filters filters={this.state.filters} onChangeType={this.updateFilters} onFindPetsClick={this.getPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
