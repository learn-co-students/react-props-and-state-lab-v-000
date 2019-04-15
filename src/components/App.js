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

  onChangeType = (passedType) => {
    this.setState({
      filters: {
        type: passedType
      }
    })
    console.log(`Change was trigerred, type is ${this.state.filters.type}, the passed type was ${passedType}`)
  }

  onFindPetsClick = () => {
    console.log("find pets was clicked")
    if (this.state.filters.type === "all") {
      fetch('/api/pets').then(response => response.json()).then(data => this.setState({pets: data}));
    } else {
      let url = '/api/pets?type=' + this.state.filters.type;
      fetch(url).then(response => response.json()).then(data => this.setState({pets: data}));
    }
    console.log(this.state.pets)
  }

  onAdoptPet = (id) => {
    let updatedPets = this.state.pets.map(pet => {
      return pet.id === id ? {...pet, isAdopted: true} : pet
    });
    this.setState({pets: updatedPets});
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
