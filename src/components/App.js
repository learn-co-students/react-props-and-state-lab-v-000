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

  handleOnChangeType = (optionChosen) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: optionChosen
      }
    })
  }

  fetchPets = () => {
    const rootURl = `/api/pets`
    let fetchUrl;

    switch (this.state.filters.type) {
      case 'cat':
        fetchUrl = rootURl + `?type=cat`;
        break;
      case 'dog':
        fetchUrl = rootURl + `?type=dog`;
        break;
      case 'micropig':
        fetchUrl = rootURl + `?type=micropig`;
        break;
      default:
        fetchUrl = rootURl;
    }

    fetch(fetchUrl)
      .then(response => response.json())
      .then(petsArray => this.updatePets(petsArray))
  }

  updatePets = (filteredPets) => {
    this.setState(prevState => ({
      pets: filteredPets
    }))
  }

  handleAdoption = petId => {
    const pets = this.state.pets.map((petObject) => {
      return petObject.id === petId ? { ...petObject, isAdopted: true } : petObject;
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
              <Filters filterApplied={this.state.filters.type} onChangeType={this.handleOnChangeType} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoption} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
