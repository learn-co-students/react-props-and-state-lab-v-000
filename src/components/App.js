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

  onFindPetsClick = () => {
    this.setState({pets: []})
    if (this.state.filters.type === "all") {
      return fetch("/api/pets")
          .then((response) => response.json())
            .then((JSONresponse) => JSONresponse.forEach((pet) => {
              var statePets = this.state.pets.slice()
              statePets.push(pet)
              this.setState({pets: statePets})
            }))
    } else {
      return fetch(`/api/pets?type=${this.state.filters.type}`)
          .then((response) => response.json())
            .then((JSONresponse) => JSONresponse.forEach((pet) => {
              var statePets = this.state.pets.slice()
              statePets.push(pet)
              this.setState({pets: statePets})
            }))
    }
  }

  onChangeType = (type) => {
    this.setState({
      ...this.state,
      filters: {
      type: type
      }
    })
  }

  onAdoptPet = (id) => {
    debugger;
    var petObj = this.state.pets.filter((pet) => {
      return pet.id === id
    })
    this.state.adoptedPets.push(petObj)
    var newPets= this.state.pets.filter((pet) => {
      return pet.id !== petObj.id
    })
    this.setState({
      pets: newPets
    })
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
              <Filters
                filters={this.state.filters} 
                onFindPetsClick={this.onFindPetsClick.bind(this)} 
                onChangeType={this.onChangeType} 
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets={this.state.pets}
                adoptedPets={this.state.adoptedPets}
                onAdoptPet={this.onAdoptPet.bind(this)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;