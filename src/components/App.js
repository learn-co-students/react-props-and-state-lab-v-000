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
//needs to change app's type 
  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value  
      }
    })
  }

  onAdoptPet = (petID) => {
    for (var i = 0; i < this.state.pets.length; i++) {
      var currpet = this.state.pets[i];
        if (currpet.id == petID) {
          /*this.setState({
            isAdopted: true
          }); */
          currpet.isAdopted = true;
          break;
        }
    }
   }


  onFindPetsClick = () => {  /* arrow function to access the this method */
    if (this.state.filters.type !== 'all') {
    fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(response => response.json())
      .then(data => this.setState({ data }));
    } else {

    fetch('/api/pets')
      .then(response => response.json())
      .then(data => this.setState({ data }));
    }
  };

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
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/> 
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
