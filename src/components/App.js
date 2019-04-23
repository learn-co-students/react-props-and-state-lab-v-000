import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  // here, we'll build a State change function
  onChangeType = e => {
    this.setState({
      filters: {
        // here, we'll utilize the spread operator to de-compose the filters object
        ...this.state.filters,
        type: e.target.value
      }
    });
  }

  // here, we'll use our good ol' arrow function so we don't unintentionally mess with 'this' (perfect for state changes)
  fetchPets = () => {
    // we know we want to receive data from our api
    let url = '/api/pets';
    // we also know we want to choose based on our filter ~if~ we decide to. 
    if (this.state.filters.type !== 'all') {
      url = url + `?type=${this.state.filters.type}`
    };
    fetch(url)
    .then(res => res.json())
    .then(
      data => this.setState({
        pets: data
      })
    );
  }

  // now, we need to create a function to handle what happens when a pet gets adopted:
  onAdoptPet = id => {
    let petArray = this.state.pets.map(p => {
      return p.id === id ? {...p, isAdopted: true} : p;
    });
    this.setState({
      pets: petArray
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
                onChangeType={this.onChangeType}
                onFindPetsClick={this.fetchPets}
              />  
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

