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

    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.handleFetchRequest = this.handleFetchRequest.bind(this)
    this.handleAdoptPet = this.handleAdoptPet.bind(this)
  }

  handleFilterChange(type) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type
      })
    }, function() {
      console.log(this.state.filters.type) // optional
    })
  }

  handleFetchRequest() {
    let url = '/api/pets'

    if(this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    }

    fetch(url)
      .then(response => response.json())
      .then(pets => this.setState({pets},
        () => console.log(this.state.pets))) // optional
  }

  handleAdoptPet(petId) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId]
    }, () => console.log(this.state.adoptedPets)) // optional
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
              <Filters filters={this.state.filters}
                        onChangeType={this.handleFilterChange}
                        onFindPetsClick={this.handleFetchRequest}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
                          adoptedPets={this.state.adoptedPets}
                          onAdoptPet={this.handleAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
