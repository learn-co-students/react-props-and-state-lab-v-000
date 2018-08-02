import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all'
      }
    }
  }

  typeChange = petType => {
    this.setState({
      filters: {
        type: petType
      }
    })
  }

  findPets = () => {
    let petType = this.state.filters.type
    let url = petType === 'all' ? '/api/pets' : `/api/pets?type=${petType}`

    fetch(url)
    .then(
      response => {
        response.json()
        .then(data => {
          this.setState({
            pets: data
          });
        });
      });
    }

    onAdoptPet = id => {
      const pets = this.state.pets.map(pet => { return pet.id === id ? {...pet, isAdopted: true } : pet;})

      this.setState({
        pets
      })
    }

  render() {
    //debugger;
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.typeChange}
                onFindPetsClick={this.findPets}
                />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
