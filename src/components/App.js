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

  handleChangeFilterType = type => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: type
      }
    });
  }

  handleFindPetsClick = () => {
    const type = this.state.filters.type;
    const url = (type === 'all') ? '/api/pets' : `/api/pets?type=${type}`;
    fetch(url).then(data => {
      this.state.pets = data;
    });
  }

  handleAdoptPet = pet => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, pet]
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
              <Filters onChangeType={this.handleChangeFilterType} onFindPetsClick={this.handleFindPetsClick} filters={this.state.filters}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.handleAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
