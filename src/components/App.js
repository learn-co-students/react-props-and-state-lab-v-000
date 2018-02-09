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

    this.handleSelect = this.handleSelect.bind(this);
    this.handleAdoption = this.handleAdoption.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleAdoption = id => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  handleSelect = (filter) => {
    this.setState({
      filters: {
        type: filter,
      }
    })
  }

  // fetches to api based on filters type
  handleClick = (e) => {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets').then(res => res.json()).then(res => this.setState({
        pets: res,
      }))
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`).then(res => res.json()).then(res => this.setState({
        pets: res,
      }))
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
              <Filters
                onChangeType={this.handleSelect}
                onFindPetsClick={this.handleClick}
                filters={this.state.filters}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                adoptedPets={this.state.adoptedPets}
                onAdoptPet={this.handleAdoption}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
