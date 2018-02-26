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
    const arr = this.state.adoptedPets;
    arr.push(id);
    this.setState({
      adoptedPets: arr
    });
  }

  onChangeType = (selectValue) => {
    this.setState({
      filters: {
        type: selectValue
      }
    })
  }

  onFindPetsClick = () => {
    let api = '/api/pets'
    if (this.state.filters.type !== 'all') {
      api += '?type=' + this.state.filters.type
    }
    fetch(api)
      .then((response) => {
        return response.json()
      }).then((json) => {
        this.setState({
          pets: json
        });
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
              <Filters filters={this.state.filters} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
