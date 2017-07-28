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

  onChangeType = (value) => {
    this.setState({
      filters: {
        type: value,
      }
    })
  }

  onFindPetsClick = () => {
    if(this.state.filters.type === 'all'){
      fetch('/api/pets')
      .then(
        res => res.json())
      .then(
        res => this.setState({
          pets: res
        })
      );
    }
    else {
      fetch('/api/pets' + '?type=' + this.state.filters.type).then(
        res =>
        res.json()).then(res =>
        this.setState({
          pets: res
        })
      );
    }
  }

  onAdoptPet = (id) => {
    this.setState({
      adoptedPets: [
        ...this.state.adoptedPets,
        id
      ]
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
              <Filters
                filters={this.state.filters}
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
                />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
                adoptedPets={this.state.adoptedPets}
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
