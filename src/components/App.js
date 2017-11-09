import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();
//the initial state is defined
    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

//change App's state when onChangeType prop is passed into Filters
  fetchPets = () => {
    let url = '/api/pets'
    //if type is not all, /api/pets?type=cat/dog/micropig
    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    }

    fetch (url)
    .then(res => res.json())
    .then(pets => this.setState({ pets }))
  }

  handleChangeFilterType = type => {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type
      })
    })
  }

  handleAdoptPet = petId => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId]
    })
  }
//passing right properties to Filters and PetBrowser
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
            //onChangeType prop is passed into Filters
            //when onFindPetsClick prop is passed, the App fetches a list of pets
              <Filters
              filters={this.state.filters}
              onChangeType={this.handleChangeFilterType}
              onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
            //set the pet data on the state property pets
              <PetBrowser
              pets={this.state.pets}
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
