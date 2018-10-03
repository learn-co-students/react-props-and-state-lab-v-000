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

  updateFilterType = (filterType) => {
    this.setState({
      filters: {
        type: filterType
      }
    })
  }

  fetchPets = () => {
    if (this.state.filters.type === 'all'){
    fetch(`/api/pets`)
      .then( response => response.json() )
      .then( data => this.setState({ pets: data }) );
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
        .then( response => response.json() )
        .then( data => this.setState({ pets: data }) );
    }
  }

  updateAdoptionStatus = (id) => {
    let updatedPets = this.state.pets.map(function(obj) {
      if (obj.id === id){
        obj.isAdopted = Boolean(true)
      }
    })

    this.setState({ updatedPets })
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
              <Filters onChangeType={ this.updateFilterType } onFindPetsClick={ this.fetchPets }/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={ this.state.pets } onAdoptPet={ this.updateAdoptionStatus }/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
