import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';
import { getAll } from '../data/pets';

const allPets = Array.from(getAll);

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
  handleChange =(filterType)=>{
    this.setState({
      ...this.state,
      filters: {
        type: filterType,
      }
    })
  }
  fetchList = ()=>{
    fetch(this.setFilterUrl())
    .then(response=>response.json())
    .then(petsList=> this.setState({
      ...this.state,
      pets: [...petsList],
      })
    )
  }
  setFilterUrl =()=>{
    if (this.state.filters.type ==='all'){
      return '/api/pets'
    } else {
      return `/api/pets?type=${this.state.filters.type}`
    }
  }
  onAdoptPet= (petId)=>{
    this.setState({
      ...this.state,
      adoptedPets: [...this.state.adoptedPets, petId],
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
                onFindPetsClick={this.fetchList}
                onChangeType={this.handleChange}/>
            </div>
            <div className="twelve wide column">
            <PetBrowser
              pets={this.state.pets}
              adoptedPets = {this.state.adoptedPets}
              onAdoptPet = {this.onAdoptPet}
            />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
