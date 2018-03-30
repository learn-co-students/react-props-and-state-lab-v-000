import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

const MALE_DOG = {
  "id": "9e7cc723-d7f5-440d-8ead-c311e68014ee",
  "type": "dog",
  "gender": "male",
  "age": 8,
  "weight": 6,
  "name": "Kennedy"
};

const FEMALE_CAT = {
  "id": "86520b4b-7849-4462-b511-cddc7f416ad6",
  "type": "cat",
  "gender": "female",
  "age": 7,
  "weight": 6,
  "name": "Cuddles"
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [MALE_DOG, FEMALE_CAT],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  fetchPets = () => {
    let url = '/api/pets';

    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({ pets }));
  }

  handleSelect = type => {
    this.setState({
      filters: {type: type},
    })
  }

  handleAdoptPet = petId => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId],
    });
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
                onChangeType={this.handleSelect}
                onFindPetsClick={this.fetchPets}
                
              />
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
