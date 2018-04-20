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

  handleChangeType = (event) => {
    this.setState({
        filters: {
          type: event,
       },
    });
  }
  
  handleFetch = () => {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets')
        .then(function(response) {
          this.setState({
            pets: response,
          });
        })
    } else if (this.state.filters.type === 'cat') {
      fetch('/api/pets?type=cat')
        .then(function(response) {
          this.setState({
            pets: response,
          });
        })
    } else if (this.state.filters.type === 'dog') {
       fetch('/api/pets?type=dog')
        .then(function(response) {
          this.setState({
            pets: response,
          });
        })
    } else if (this.state.filters.type === 'micropig') {
       fetch('/api/pets?type=micropig')
        .then(function(response) {
          this.setState({
            pets: response,
          });
        })
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
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handleFetch}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
