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

    this.setState = this.setState.bind(this)
  }

  onChangeType = (event) => {
    debugger;
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onFindPetsClick = () => {
    debugger;
    if (this.state.filters.type === "all") {
      fetch('/api/pets')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        this.setState({pets: myJson})
      });
    } else {
      fetch('/api/pets?type=' + this.state.filters.type)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        this.setState({pets: myJson})
      });
    }
  }

  onAdoptPet = () => {

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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
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
