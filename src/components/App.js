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
  }//end constructor

  onChangeType = (selectType) => {
    this.setState({
      filters: {...this.state.filters,type: selectType} //end ...this
    })//end setState , this is async
  };

  onFindPetsClick =() => {
    let url = '/api/pets'
    switch(this.state.filters.type) {
    case 'cat':
        url = '/api/pets?type=cat'
        break;
    case 'dog':
        url = '/api/pets?type=dog'
        break;
    case 'micropig':
        url = '/api/pets?type=micropig'
        break;
    default:
        url = '/api/pets'
    }// end switch

    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        this.setState({
          pets: myJson
        })
    }.bind(this));//end fetch

  }

  onAdoptPet = (id) => {
    //console.log(id) NOT SURE WHAT THIS DOES
    //toggles pets adopted status
    // get pet from pets with id and change isAdopted: to opposite
    let objArray = this.state.pets
    let obj = objArray.find(function (obj) { return obj.id === id; });
    obj.isAdopted = true
    console.log(obj)
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
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }//end render
}//end class

export default App
