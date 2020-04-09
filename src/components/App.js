import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
    this.onFindPetsClick = this.onFindPetsClick.bind(this)
    this.onAdoptPet = this.onAdoptPet.bind(this)
  }


  onAdoptPet(uid) {
    function compareIds(el) {
      return el.id == uid
    }
    let petIndexToAdopt = this.state.pets.findIndex(compareIds)
    this.setState(state => {
      const pets = state.pets.map((item, i) => {
        if (i == petIndexToAdopt) {
          // debugger
          return item.isAdopted = true
        } else {
          // debugger
          return item
        }
      })
      return pets
    })
  }

  onFindPetsClick() {
    if (this.state.filters.type == "all") {
      fetch('/api/pets')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          this.setState({
            pets: data
          })
      })
    } else {
      let type = this.state.filters.type
      fetch(`/api/pets?type=${type}`)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          this.setState({
            pets: data
          })
      })
    }
  }

  onChangeType = (event) => {
    this.setState({
      filters: { type: event.target.value }
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
              <Filters onFindPetsClick={this.onFindPetsClick} formData={this.state} onChangeType={this.onChangeType}/>
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
