import React from 'react'

import Pet from './Pet'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

onFindPetsClick = () => {
    let endpoint = '/api/pets';

    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`;
    }

    fetch(endpoint)
      .then(res => res.json())
      .then(pets => this.setState({ pets: pets }));
  
    // if (this.state.filters.type === 'all'){ 
    // fetch(`/api/pets`)
    // .then(response => response.json())
    // .then(data => console.log(data))
    // } elsif (this.state.filters.type === 'cat'); {
    //   fetch(`/api/pets/${'?type=cat'}`)
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    // } elsif (this.state.filters.type === 'dog'); {
    //   fetch(`/app/pets/${'?type=dog'}`)
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   } elsif (this.state.filters.type === 'micropig'); {
    //     fetch(`/api/pets/${'?type=micropig'}`)
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //   }
}

  onChangeType = ({target: {value}}) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: value
      }
    })
  }

  onAdoptPet = (id) => {
    const pets = this.state.pets.map(pet => {
      return pet.id === id ? {...pet, isAdopted: true} : pet;
    });
    this.setState({pets: pets})
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
              onChangeType={this.onChangeType} 
              onFindPetsClick={this.onFindPetsClick}
              />
              
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}
              />
              <Pet onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }




}