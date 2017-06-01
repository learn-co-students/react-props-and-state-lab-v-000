import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

export default class App extends React.Component {
  constructor() {
    super();
    this.onChangeType = this.onChangeType.bind(this)
    this.onFindPetsClick = this.onFindPetsClick.bind(this)
    this.onAdoptPet = this.onAdoptPet.bind(this)

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  onChangeType(type) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type
      })
    })
  }

  onFindPetsClick() {
    let url = "/api/pets"
    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    }

    fetch(url).then(res => res.json()).then(pets => {this.setState({pets: pets })})
  }

  onAdoptPet(petId) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId]
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
              <Filters filters={this.state.filters} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} adoptedPets={this.state.adoptedPets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
