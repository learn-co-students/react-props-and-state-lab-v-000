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

  filterType = (type) => {
    this.setState({
      filters: {
        ...this.state.type,
        type: type
      }
    })
  };

  findPets = () => {
    const that = this;
    if (this.state.filters.type === 'all')  {
        fetch(`/api/pets`)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonStr) {
            that.setState({ pets: jsonStr });
        });
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonStr) {
            that.setState({ pets: jsonStr });
        });
    }
  };

  adoptPet = (id) => {
    let petArray = this.state.pets
    for (let j = 0; j < petArray.length; j++){
      if (petArray[j].id === id) {
        petArray[j].isAdopted = true
      }
    }
    this.setState({
      pets: petArray
    });
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
              <Filters onChangeType={this.filterType} onFindPetsClick={this.findPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
