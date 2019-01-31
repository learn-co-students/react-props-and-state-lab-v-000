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

  onChangeType = (filterResult) => {
    this.setState({
      filters: {
        ...this.state.filters, type: filterResult
      }
    })
  }

  onFindPetsClick = () => {
    let route;
    
    switch (this.state.filters.type) {
      case 'all':
        route = '/api/pets'
        break;
      case 'cat': 
        route = '/api/pets?type=cat'
        break;
      case 'dog': 
        route = '/api/pets?type=dog'
        break;
      case 'micropig': 
        route = '/api/pets?type=micropig'
        break;
      default: 
        route = '/api/pets'
    }
   
    fetch(route)
      .then(results => results.json())
        .then(data => {
          this.setState({
            pets: [...data]
          }, () => console.log(this.state))
    })
  }

  onAdoptPet = (returnId) => {
    const petArr = this.state.pets
    
    petArr.find(pet => {
      if (pet.id === returnId) {
        return pet.isAdopted = true
      }
    })

    this.setState({
      pets: petArr
    })
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
