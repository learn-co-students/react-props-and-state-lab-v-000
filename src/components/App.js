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

  handleChangeFilterType = (value) => {
    this.setState({
      filters: {
        type: value
      }
    })
  }

  handleAdoptButton = (id) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  handleFetchPets = () => {
    let url = '/api/pets'
    let filter = this.state.filters.type

    if (filter != 'all') {
      url = `${url}?type=${filter}`
    }
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then( pets => { this.setState({pets: pets})})
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
              <Filters filters={this.state.filters} onChangeType={this.handleChangeFilterType} onFindPetsClick={this.handleFetchPets.bind(this)} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.handleAdoptButton}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
