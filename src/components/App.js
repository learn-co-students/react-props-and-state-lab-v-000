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


  onFindPetsClick = () => {
    let type = this.state.filters.type
    let url = "/api/pets"
    if (type === "all" || type === "undefined") {

    } else {
      url = `${url}?type=${type}`
    }
    fetch(url)
    .then(response => response.json())
    .then(pets => this.setState( {pets }))
  }

  onAdoptPet = (id) => {
   this.setState({
    pets: this.state.pets.map((pet, index) => {
      if (pet.id==id) {
        pet.isAdopted = true
      }
      return pet
    })
   })
  }



  onChangeType = (event) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
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
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
