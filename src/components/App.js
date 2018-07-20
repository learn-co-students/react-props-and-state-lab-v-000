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

  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onAdoptPet = (id) => {
    this.setState({pets: this.state.pets.map(
      (pet)=> pet.id === id ? Object.assign({}, pet, {isAdopted: true}) : pet
    )});
  }



    //fetch the list of pets of type this.state.filters["type"]
    onFindPetsClick = () => {
    const type=this.state.filters.type;
    let url = `/api/pets`;
    if (type!=='all') {
      url = `/api/pets?type=${type}`;
    }
    fetch(url)
      .then( (response) => {
          return response.json() })   
              .then( (json) => {
                  this.setState({pets: json});
              });
  
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
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
