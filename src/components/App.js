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

  handleTypeChange = ({ target: { value } }) => {
    this.setState({ 
      filters: {
        ...this.state.filters,
          type: value}
        });
  }

  onFindPetsClick = () => {
    let endpoint = '/api/pets';
    console.log(this.state.filters.type)

    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`;
    }

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify
    };
  return fetch(endpoint, requestOptions)
    .then(response => response.json())
    .then(data => this.setState({
      pets: data
    }))
  }

  onAdoptPet = petId => {
    //should find matching pet in state.pets and set the isAdopted property to true
    console.log(petId)
    const pets = this.state.pets.map((pet) => {
      return pet.id === petId ? {...pet, isAdopted: true } : pet;
    });
      this.setState({ pets: pets });
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
                onChangeType={this.handleTypeChange} 
                onFindPetsClick={this.onFindPetsClick.bind(this)}
              />
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
