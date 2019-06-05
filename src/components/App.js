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

//all,cats,dogs,micropigs
  onChangeType = event => {
    console.log(event.target.value)
   this.setState({
     filters: {
       type: event.target.value
     }
   })
  }

  //arrow function automaticlly bind this

  onFindPetsClick = event => {
    let url = '/api/pets'
    if(this.state.filters.type !== 'all'){
      //adjust the url accordingly
      url += `?type=${this.state.filters.type}`
    }

    //fetch
  fetch(url)
    .then(response => response.json())
    .then(jsonResponse => {
      this.setState({
        pets: jsonResponse
      })
    })
  }

onAdoptPet = (id) => {
  //make a copy of the pet
  let petsArrayCopy = [...this.state.pets]
  let thePet = petsArrayCopy.find(p => p.id === id)
  thePet.isAdopted = true
  this.setState ({
    pets: petsArrayCopy
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
              <Filters
                 onChangeType={this.onChangeType}
                 onFindPetsClick={this.onFindPetsClick}
                 />
            </div>
            <div className="twelve wide column">
              <PetBrowser
               onAdoptPet= {this.onAdoptPet}
               pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
