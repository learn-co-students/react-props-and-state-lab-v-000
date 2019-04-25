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
    this.setState ({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })
  }

  onFindPetsClick = () => {

    let url, query;

    if (this.state.filters.type !== 'all') {
      url = '/api/pets' + `?type=${this.state.filters.type}`
    } else {
      url = url = '/api/pets'
    }

    fetch(url)
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        pets: json
      })
    })

  }

  // my way below changes the adopted value but never upates the state so the App never knows of it.
  // onAdoptPet = (petId) => {
  //   for(const pet of this.state.pets) {
  //     if (pet.id === petId){
  //       pet.isAdopted = true
  //
  //       })
  //     }
  //   }
  // }

  onAdoptPet = petId => {
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
          <div>{this.state.filters.matchingPet}</div>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
                />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
