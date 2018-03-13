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

  onChangeType = e => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: e
      }
    })
  }

  onFindPetsClick = () => {
    let url = '/api/pets'

    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    }

    fetch(url)
    .then(res => res.json())
    .then(pets => this.setState({ pets }))
  }

  onAdoptPet = petId => {
    //Should have an `onAdoptPet` prop. 
    //This callback prop gets passed to its `<Pet />` children components.
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId ]
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
              <Filters filters={this.state.filters.type} onChangeType={this.onChangeType}
              onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}
              adoptedPets={this.state.adoptedPets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
