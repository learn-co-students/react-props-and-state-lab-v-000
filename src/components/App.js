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

  setType = (type) => {
    this.setState({
      filters: {
        type: type,
      }
    });
  }

  fetchPets = () => {
    var listOfPets = []
    if(this.state.filters.type === 'all'){
      listOfPets = fetch("/api/pets")
    } else {
      listOfPets = fetch(`/api/pets?type=${this.state.filters.type}`)
    }

    this.setState({
      pets: listOfPets
    });
  }

  setAdopt = (id) => {
    this.setState({
      adoptedPets: this.state.adoptedPets.concat([id])
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
              <Filters filters={this.state.filters} onChangeType={this.setType} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.setAdopt}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
