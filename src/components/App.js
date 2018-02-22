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

  clickFilter = () => {

    switch(this.state.filters.type) {
      case "all":
        fetch('/api/pets').then(list => {return list.json()}).then(jsonList => {
          this.setState({pets: [...this.state.pets, jsonList]})})
        break;
      case "cat":
      case "dog":
      case "micropig":
        fetch(`/api/pets?type=${this.state.filters.type}`).then(list => {return list.json()}).then(jsonList => {
          this.setState({pets: [...this.state.pets, jsonList]})})
        break;
      default:
        fetch('/api/pets').then(list => {return list.json()}).then(jsonList => {
          this.setState({pets: [...this.state.pets, jsonList]})})
        break;
    }
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
              <Filters filters={this.state.filters} onFindPetsClick={this.clickFilter} onChangeType={(eventValue) => {this.setState({filters: {...this.state.filters, type: `${eventValue}`}})}} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={(petId) => {this.setState({adoptedPets: [...this.state.adoptedPets, petId]})}} pets={this.state.pets} adoptedPets={this.state.adoptedPets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
