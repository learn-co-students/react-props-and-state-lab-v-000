import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import allPets from "../data/pets.js";

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

  changeFilterType = ({newFilter}) => {
    // alert("you changed the filter type")
    this.setState({
      filters: {
        // ...this.state.filters,
        type: newFilter
      }
    })
    console.log(this.state)
  }

  findPets = () => {
    fetch(`/api/pets.json`, this.state.filters.type)
    .then(res => res.json())
    .then(pets => {
      console.log(pets)
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
              <Filters onFindPetsClick={this.findPets} onChangeType={this.changeFilterType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
