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

  handleOnChangeType = event => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      },
    });
  }

  handleOnFindPetsClick = event => {
    let petArray = []
    if (this.state.filters.type === 'all') {
      fetch('/api/pets').then(function(response) {
        return response.json();
      }).then(function(myJson) {
          petArray.push(myJson)
        });
    }
    else if (this.state.filters.type === 'cat') {
      fetch('/api/pets?type=cat').then(function(response) {
        return response.json();
      }).then(function(myJson) {
          petArray.push(myJson)
      });
    }
    else if (this.state.filters.type === 'dog') {
      fetch('/api/pets?type=dog').then(function(response) {
        return response.json();
      }).then(function(myJson) {
          petArray.push(myJson)
      });
    }
    else if (this.state.filters.type === 'micropig') {
      fetch('/api/pets?type=micropig').then(function(response) {
        return response.json();
      }).then(function(myJson) {
          petArray.push(myJson)
      });
    }
    this.setState({
      pets: petArray
    })
  }

  handleOnAdoptPet = petId => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets });
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
              <Filters onChangeType={this.handleOnChangeType} onFindPetsClick={this.handleOnFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleOnAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
