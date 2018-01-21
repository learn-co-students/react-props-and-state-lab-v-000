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


  onAdoptPet = (id) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  onChangeType = (newType) => {
    this.setState({
      ...this.state,
      filters: {
        type: newType
      }
    });
  }

  on

  onFindPetsClick = (e) => {
    const petType = this.state.filters.type;
    const url = petType === 'all' ? '/api/pets' : `/api/pets?type=${petType}`;
    fetch(url)
      .then(res => res.json())
      .then(pets => {
          this.setState({
            pets: pets
          })
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
                onAdoptPet={this.onAdoptPet}
                adoptedPets={this.state.adoptedPets}
                pets={this.state.pets}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
