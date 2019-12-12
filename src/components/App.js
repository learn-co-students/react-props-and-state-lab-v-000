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

  updateFilter = (event) => {

    this.setState({
      ...this.state,
      filters: {
        type: event
      }
    })
  }

  addData = (data) => {
    this.setState({
      ...this.state,
      pets: data
    })
  }

  findPetsClick = (event) => {

    let call = ''

    if(this.state.filters.type === 'all'){
      call = '/api/pets'
    } else if(this.state.filters.type === 'cat'){
      call = '/api/pets?type=cat'
    } else if(this.state.filters.type === 'dog'){
      call = '/api/pets?type=dog'
    } else {
      call = '/api/pets?type=micropig'
    }

    fetch(call)
        .then(response => {
           return response.json();
         })
         .then(data => this.addData(data));
  }

  changeAdopt = (pet) => {
    this.state.pets.forEach(p => {
        if(p.id === pet){
          p.isAdopted = true
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
              <Filters onChangeType={this.updateFilter} onFindPetsClick={this.findPetsClick}/>
            </div>
            <div className="twelve wide column">


              <PetBrowser onAdoptPet={this.changeAdopt} pets={this.state.pets}/>



            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
