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

  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  };

  handleLogicForRequest = () => {
    if (this.state.filters.type === 'dog') {
      return '/api/pets?type=dog'; //type is 'dog'
    } else if (this.state.filters.type === 'cat') {
      return '/api/pets?type=cat';//type is 'cat'
    } else if (this.state.filters.type === 'micropig') {
      return '/api/pets?type=micropig';//type is 'cat'
    } else {
      //type is 'all'
      return '/api/pets';
    }
  }

  onSelectAnimalType = () => {
    fetch(this.handleLogicForRequest())
    // .then(() => console.log("hi"))
    .then(response => response.json())
    // .then(pets => this.setState({ pets }), () => console.log(pets));
    .then(pets => {
       this.setState({ pets })
       //console.log(pets)
       // now you can console.log pets from here, then set state after if you want
    })
  };

  onAdoptPet = (id) => {
    const aPet = this.state.pets.map( pet => {
        if (pet.id === id ) {
        pet.isAdopted = true
        return pet
      } else {
        return pet
      }});
    this.setState({ pets: aPet})
  }

  render() {
    debugger
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick ={this.onSelectAnimalType} />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets = {this.state.pets}
                onAdoptPet = {this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
