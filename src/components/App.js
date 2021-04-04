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

  updateFilters = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
    
  }

  getPets = () => {
    let url = '/api/pets'
    if (this.state.filters.type !== "all"){
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(resp => resp.json())
      .then(json => {
        console.log(json)
        
        this.setState({
          pets: json
        })
      })
    } else {
      fetch(url)
      .then(resp => resp.json())
      .then(json => {
        console.log(json)
        this.setState({
          pets: json
        })
      })
    }
  }

  // onAdoptPet = (petId) => {
  //   this.setState({})
  // }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.updateFilters} onFindPetsClick={this.getPets}/>
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
