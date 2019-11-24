import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    };
    // this.onFindPetsClick();
    //initial fetch call when App loads
  }

  onAdoptPet = (e) => {
    let pets = this.state.pets;
    let remainingPets = pets.filter((pet) => {
      return pet.id != e.target.attributes[0].value
    })
    let adoptedPet = pets.filter((pet, i) => {
      return pet.id == e.target.attributes[0].value
    })
    adoptedPet[0].isAdopted = true
    //adopted pets will move to to top of the listings
    remainingPets.unshift(adoptedPet[0]);
    this.setState({
      ...this.state, pets: remainingPets
    })
  }

  onChangeType = (event) => {
    this.setState({
      filters: {
        ...this.state.filters, type: event.target.value
      }
    })
  }

  onFindPetsClick = (event = null) => {
    event ? event.preventDefault() : null;
    let filter = this.state.filters.type;
    if (filter === 'all') {
      fetch('/api/pets')
        .then(resp => resp.json())
        .then(json => this.setState({
          ...this.state, pets: json
        })
        );
    } else {
      let params = `type=${filter}`
      fetch(`/api/pets?${params}`)
        .then(resp => resp.json())
        .then(json => this.setState({
          ...this.state, pets: json
        })
        )
    }
  }

  render() {
    return (
      <div className="ui container" >
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
