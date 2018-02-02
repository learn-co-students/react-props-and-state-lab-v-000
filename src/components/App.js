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

  onChangeType = (newType) => {
    this.setState({
      filters: {
        type: newType
      }
    })
  }

  onFindPetsClick = () => {
    const url = this.state.filters.type === 'all' ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`
    fetch(url).then(response => this.setState({pets:response}))
  }

  onAdoptPet = (id) => {
    this.setState((prevState) => {
      adoptedPets: prevState.adoptedPets.push(id)
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
              <Filters filters={this.state.filters} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
