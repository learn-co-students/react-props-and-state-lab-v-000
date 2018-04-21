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



  handleChangeType = (value) => {
    this.setState({
        filters: Object.assign({}, this.state.filters, {
          type: value,
        })
    });
    
  }
  
  
  
  handleFetch = () => {
    // console.log("click");
    // debugger
    if (this.state.filters.type === 'all') {
      fetch('/api/pets')
        .then(function(response) {
          this.setState({
            pets: response,
          });
        }.bind(this))
    } else if (this.state.filters.type === 'cat') {
      fetch('/api/pets?type=cat')
        .then(function(response) {
          console.log(response)
          this.setState({
            pets: response,
          });
        }.bind(this))
    } else if (this.state.filters.type === 'dog') {
       fetch('/api/pets?type=dog')
        .then(function(response) {
          this.setState({
            pets: response,
          });
        }.bind(this))
    } else if (this.state.filters.type === 'micropig') {
       fetch('/api/pets?type=micropig')
        .then(function(response) {
          this.setState({
            pets: response,
          });
        }.bind(this))
    }
  }
  
  handleAppAdoption = () => {
    this.state.adoptedPets
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
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handleFetch.bind(this)}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} handleAdoption={this.handleAppAdoption}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
