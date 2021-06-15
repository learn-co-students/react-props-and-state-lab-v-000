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

  changeType = (e) => {
    this.setState({
      filters: {
        type: e.target.value
      }
    }
    )
  }

  findPetsClick = () => {
    let baseURL = '/api/pets';

    if (this.state.filters.type !== 'all'){
      baseURL += `?type=${this.state.filters.type}`;
    }

    fetch(baseURL)
      .then(r => r.json())
      .then(r => {
        this.setState({
          pets: r
        })
      })
  }

  onAdoptPet = (id) => {
    const pets = this.state.pets.map( p => {
      return p.id === id ? { ...p, isAdopted: true} : p;
    });
    this.setState({pets: pets})
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={e => this.changeType(e)} onFindPetsClick={this.findPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={e => this.onAdoptPet(e)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
