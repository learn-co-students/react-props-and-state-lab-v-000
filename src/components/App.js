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

  
  onChangeType = event => {
    this.setState({
      type: this.state.filters.type
    })
  }

  onFindPetsClick = () => {
    let apiUrl = '/api/pets'
    if (this.state.filters.type === 'all') {
      fetch(apiUrl)
      .then(response => response.json())
      .then(data => this.setState({ pets: data.pets }))
    } else {
      fetch(apiUrl + `?type=${this.state.filters.type}`)
      .then(response => response.json())
      .then(data => this.setState({ pets: data.pets }))
    };
  }

  onAdoptPet = (id) => {
    const pets = this.state.pets.map(pet => {return pet.id === id ? { ...pet, isAdopted: true} : pet; })
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
              <Filters onChange={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App
