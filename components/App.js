import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

export default class App extends React.Component {
  constructor() {
    super();
    this.handleFilterTypeChange = this.handleFilterTypeChange.bind(this);
    this.findPets = this.findPets.bind(this);
    this.adoptPet = this.adoptPet.bind(this);
    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all'
      }
    };
  }
  handleFilterTypeChange(type){
    this.setState({
      filters: Object.assign({}, this.state.filters, {type: type})
    })
  }

  findPets(event){
    var pets;
    var app = this;
    let url = '/api/pets'
    if(this.state.filters.type !== 'all'){
      url += ('?type=' + this.state.filters.type)
    }
    console.log(url)
    
    fetch(url).then(function(response){
      return response.json()
    }).then(function(response){
      pets = response;
      app.setState({
         pets: pets
      })
    }
    )
   }

  adoptPet(petId){
    this.setState({
      adoptedPets: this.state.adoptedPets.concat([petId])
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
              <Filters filters={this.state.filters} onFindPetsClick={this.findPets} onChangeType={this.handleFilterTypeChange}/>
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
