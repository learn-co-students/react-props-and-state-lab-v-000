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

  changeFilterType = (type) => {
    this.setState({
      filters: {
        type: type
      }
    })
  }

  adoptMeNow = (id) => {
    this.state.adoptedPets.push(id)
  }

  fetchPets = () => {
    if (this.state.filters.type === "all"){
      return fetch('/api/pets')
             .then(response => response.json())
    } else {
        return fetch('/api/pets?type=' + this.state.filters.type)
           .then(response => response.json())
    }
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
              <Filters onChangeType={this.changeFilterType}
                       onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptMeNow}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;