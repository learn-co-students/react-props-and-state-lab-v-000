import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    this.setState({filters: {type: event.target.value}})
  }

  onFindPetsClick = () => {
    let query = '';
    switch (this.state.filters.type) {
      case 'cat':
        query = '?type=cat';
        break;
      case 'dog':
        query = '?type=dog';
        break;
      case 'micropig':
        query = '?type=micropig';
        break;
      default:
        query = '';
    }
    fetch('/api/pets' + query)
      .then((response) => response.json())
      .then((response) => this.setState({response}));
  }

  onAdoptPet = (id) => {
    let pets = this.state.pets;
    this.setState({pets})
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
