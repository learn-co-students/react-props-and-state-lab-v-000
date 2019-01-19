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

  fetchPets = () => {
    let apiWithQuery
    const baseApi = '/api/pets'

    if(this.state.filters.type === 'all'){
      apiWithQuery = baseApi 
    } else {
      apiWithQuery = baseApi + `?type=${this.state.filters.type}`
    }


    fetch(apiWithQuery)
      .then(response => response.json())
      .then(data => this.setState({ 
          pets: [...this.state.pets].concat(data)
      }))
      .then(data => console.log(data))
  }

  updateAppFilters = (filterType) => {
    this.setState({
      filters: {
        type: filterType
      }
    })
  }

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
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.updateAppFilters} onFindPetsClick={this.fetchPets}/>
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
