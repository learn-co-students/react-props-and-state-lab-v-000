import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import Pet from './Pet'

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

  onFindPetsClick = (e) => {
    const type = this.state.filters.type;
    var url = `/api/pets`;
    if (type !== 'all'){
      url = `/api/pets?type=${type}`;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ pets: data }));

    }

  onChangeType = (e) => {
    console.log("HI I CHANGED")
    this.setState({
      filters: {
        type: e.target.value,
      }
    }, () => console.log(this.state.filters))
  }

  onAdoptPet = (petId) => {
    const pets = this.state.pets.map((pet) => {
      return pet.id === petId ? {...pet, isAdopted: true} : pet;
    });
    this.setState({pets})
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
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
