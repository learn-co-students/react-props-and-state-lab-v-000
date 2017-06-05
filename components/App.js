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

    this.handleChangeType = this.handleChangeType.bind(this)
    this.handleFindPetsClick = this.handleFindPetsClick.bind(this)
    this.handleAdoptPet = this.handleAdoptPet.bind(this)
  }

  handleChangeType(type) {
    this.setState({
      filters: { type: type }
    })
  }

  handleFindPetsClick() {
    var type = this.state.filters.type
    if (type === 'all') {
      fetch('/api/pets').then(function(response) {
        debugger
        this.setState({
          pets: response
        })
      })
    } else {
      fetch(`/api/pets?type=${type}`).then(function(response) {
        this.setState({
          pets: response
        })
      })
    }
  }

  handleAdoptPet(pet) {
    this.setState({
      adoptedPets: this.state.adoptedPets.concat([pet])
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
              <Filters filters={ this.state.filters } onChangeType={ this.handleChangeType } onFindPetsClick={ this.handleFindPetsClick }/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={ this.state.pets } adoptedPets={ this.state.adoptedPets } onAdoptPet={ this.handleAdoptPet }/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
