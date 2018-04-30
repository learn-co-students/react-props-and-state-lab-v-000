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
  onChangeType = value => {
    this.setState({
      filters: {
        type: value
      }
    })
  }
  onFindPetsClick = () => {
    let value = this.state.filters.type;
    let url
    switch(value) {
      case 'all':
        url = '/api/pets'
        break;
      default:
        url = `/api/pets?type=${value}`
    }
    fetch(url).then(res => res.json()).then(json => this.setState({pets:[json]}))
  }

  onAdoptPet = id => {
    this.setState({
      pets: this.state.adoptedPets.push(id)
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
              <Filters filters={this.state.filters} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
