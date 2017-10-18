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

  onChangeType = (petType) => {
    // console.log(petType);
    this.setState({
      filters: {
        type: petType,
      }
    });
  }

  onFindPetsClick = () => {
    if (this.state.filters.type === "all") {
      fetch('/api/pets').then(resp => resp.json())
      .then(json => this.setState({
        pets: json
      }));
    } else if (this.state.filters.type === "cat") {
      fetch('/api/pets?type=cat').then(resp => resp.json())
      .then(json => this.setState({
        pets: json
      }));
    } else if (this.state.filters.type === "dog") {
      fetch('/api/pets?type=dog').then(resp => resp.json())
      .then(json => this.setState({
        pets: json
      }));
    } else if (this.state.filters.type === "micropig") {
      fetch('/api/pets?type=micropig').then(resp => resp.json())
      .then(json => this.setState({
        pets: json
      }));
    }
  }

  onAdoptPet = (petID) => {
    var adopted = this.state.adoptedPets
    adopted.push(petID);
    // console.log(adopted);
    this.setState({
      adoptedPets: adopted
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
              <Filters filters={this.state.filters.type}
              onChangeType={this.onChangeType}
              onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser
              pets={this.state.pets}
              onAdoptPet = {this.onAdoptPet}
              adoptedPets = {this.state.adoptedPets}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
