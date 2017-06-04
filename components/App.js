import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

export default class App extends React.Component {
  constructor() {
    super();

    this.onChangeType = this.onChangeType.bind(this);
    this.onFindPetsClick = this.onFindPetsClick.bind(this);
    this.onAdoptPet = this.onAdoptPet.bind(this);

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all'
      }
    };
  }

  onChangeType(type) {
    this.setState({
      filters: Object.assign({}, this.state.filters, { type })
    });
  }

  onFindPetsClick() {
    const { type } = this.state.filters;
    const petsUrl = (type === 'all') ? '/api/pets' : `/api/pets?type=${type}`;
    fetch(petsUrl).then(pets => this.setState({ pets }));
  }

  onAdoptPet(petId) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId]
    });
  }

  render() {
    const { filters, pets, adoptedPets } = this.state;

    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                filters={filters}
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={pets}
                adoptedPets={adoptedPets}
                onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
