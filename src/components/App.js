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

  findPets = () => {
    const filterType = this.state.filters.type
    if (filterType === "all") {
      return fetch('/api/pets')
      .then(response => response.json())
      .then(data => {this.setState({pets: data})})
    } else {
      return fetch(`/api/pets?type=${filterType}`)
      .then(response => response.json())
      .then(data => {this.setState({pets: data})})
    }
  }

  changeFilter = (type) => {
    this.setState({
      filters: {type: type}
    })
  }

  addId = (id) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id: id]
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
                onFindPetsClick={this.findPets}
                onChangeType={this.changeFilter}
                />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                onAdoptPet={this.addId}
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
