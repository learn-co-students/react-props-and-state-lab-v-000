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

  updateFiltersType = (newType) => {
    this.setState ({
      filters: {
        ...this.state.filters,
        type: newType,
      }
    })
  }

  completeFetch = () => {
    if (this.state.filters.type !== 'all') {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(response => response.json())
      .then(data => this.setState({pets: data}));
    } else {
      fetch('/api/pets')
      .then(response => response.json())
      .then(data => this.setState({pets: data}));
    }
  }

  onAdoptPet = (id) => {
    let pets = [...this.state.pets];  
    let index = pets.findIndex(el => el.id === id);
    pets[index].isAdopted = true;             
    this.setState({ pets }); 
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
              <Filters onChangeType={this.updateFiltersType} onFindPetsClick={this.completeFetch}/>
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
