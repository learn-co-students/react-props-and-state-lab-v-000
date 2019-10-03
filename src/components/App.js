import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })
  }

  onFindPetsClick = () => {
    if (this.state.filters.type === "all")
      fetch(`/api/pets`)
        .then(res => res.json())
        .then(pets => {
          pets.forEach(pet => {
            this.state.pets.push(pet)
          })
        })
    else {
      let type = this.state.filters.type
      fetch(`/api/pets?type=` + type)
      .then(res => res.json())
      .then(pets => {
        pets.forEach(pet => {
          this.state.pets.push(pet)
        })
      })
    }
  }

  onAdoptPet = petID => {
    const pets = this.state.pets.map(p => {
      return p.id === petID ? { ...p, isAdopted: true } : p;
    });
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} value={this.state.filters.type} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
