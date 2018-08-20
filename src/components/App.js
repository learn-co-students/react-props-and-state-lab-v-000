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
  
  // Function for updating filters type
  onChangeType = (value) => {
    console.log('app change filter type : ', value)
      this.setState({
        filters: {
          ...this.state.filters,
          type: value,
        },
      }, () => {console.log(this.state.filters.type)})
  }
  
  // Function for fetching pets
  onFindPetsClick = () => {
    console.log('fetch pets')
    
    let url = '/api/pets';

    // Determine which url to fetch
    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`;
    }

    // Fetch pet data
    fetch(url)
      .then(response => response.json())
      .then(pets => this.setState({ pets }, () => {console.log('fetched response')}));
      }

  // Function for pet props
  onAdoptPet = (id) => {
    const pets = this.state.pets.map((pet) => {
      return pet.id === id ? { ...pet, isAdopted: true } : pet;
    });
    this.setState({ pets }, () => {console.log('adopted pet')});
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
              <Filters onChangeType={(event) => {this.onChangeType(event)}} onFindPetsClick={(event) => {this.onFindPetsClick(event)}} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={(event) => {this.onAdoptPet(event)}}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
