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

  changeFilter = (name) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: name,
      }
    })
  }

  fetchPets = () => {
    var url = this.state.filters.type === 'all' ? '/api/pets' : ('/api/pets?type=' + this.state.filters.type)
    fetch(url).then((resp) => {
      this.setState({
        pets: resp,
      })
    })
  }

  adoptAPet = (id) => {
    this.setState((prevState) => ({
      adoptedPets: prevState.adoptedPets.concat(id)
    }));
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
              <Filters filters={this.state.filters.type} onChangeType={this.changeFilter} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.adoptAPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;