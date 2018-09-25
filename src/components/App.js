import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    };
  }

  onChangeType = e => {
    this.setState({
      filters: { ...this.state.filters, type: e.target.value }
    });
  };

  onFindPetsClick = e => {
    const { type } = this.state.filters;
    let endpoint = type === 'all' ? '' : `?type=${type}`;
    fetch('/api/pets' + endpoint)
      .then(res => res.json())
      .then(res => this.mergePets(res));
  };

  mergePets = x => {
    let pets = x;
    this.setState({
      pets: pets
    });
  };

  onAdoptPet = id => {
    let pets = this.state.pets.find(pet => {
      if (pet.id === id) {
        pet.isAdopted = !pet.isAdopted;
      }
      return pet;
    });
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
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
