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

    this.onFindPetsClick = this.onFindPetsClick.bind(this)
  }

  onChangeType = (newType) => {
      this.setState({
        filters: { ...this.state.filters, type: newType }
      })
    }

  onFindPetsClick() {
    let animal = this.state.filters.type

    animal === "all" ? fetch('/api/pets') : fetch(`/api/pets?type=${animal}`)
    .then(response => response.json())
    .then(data => {
      this.setState({ pets: data })
    })
  }

  onAdoptPet = (petId) =>{
    console.log("onAdoptPet log", petId)
  }

  render() {
    console.log(this.state)
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
