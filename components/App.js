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

    this.onAdoptPet = this.onAdoptPet.bind(this)
    this.onChangeType = this.onChangeType.bind(this)
    this.onFindPetsClick = this.onFindPetsClick.bind(this)
  }

  onAdoptPet(id) {
    this.state.adoptedPets.push(id);
  };

  onChangeType(event) {
    this.setState({
      filters: {
        type: `${event}`
      }
    });
  };

  onFindPetsClick(event) {
    var query = null;
    var that = this;
    if (this.state.filters.type === 'all') {
      query = '';
    } else {
      query = `?type=${this.state.filters.type}`;
    };
    fetch(`/api/pets${query}`).then(res => that.setState({pets: res}))
  };


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
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                adoptedPets={this.state.adoptedPets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
