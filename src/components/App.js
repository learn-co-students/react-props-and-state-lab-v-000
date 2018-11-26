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

  onChangeType = (e) => {
    const filterType = e.target.value
    this.setState ({
      filters: {
        type: filterType
      }
    })
  }

  onFindPetsClick = () => {
    const petFetch = (fetchURL) => {
      fetch(fetchURL)
      .then(resp => resp.json())
      .then(json => this.setState ({
        pets: json
      }))
    }

    const petType = this.state.filters.type
    if (petType === "cat") {
      petFetch("/api/pets?type=cat")
    } else if (petType === "dog") {
      petFetch("/api/pets?type=dog")
    } else if (petType === "micropig") {
      petFetch("/api/pets?type=micropig")
    } else {
      petFetch("/api/pets")
    }
   }

   onAdoptPet = (id) => {
    const pets = this.state.pets.map(p => {
      return p.id === id ? { ...p, isAdopted: true } : p;
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
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
