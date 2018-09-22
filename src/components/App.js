import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

// App should pass a callback prop, onChangeType, to <Filters />.
//This callback prop gets called whenever the value of the <select> element
//changes with the value of the <select>

// <Filters /> needs a callback prop, onFindPetsClick.
// This callback prop gets called when the user clicks the 'Find pets' button.

// <PetBrowser />  should receive a pets prop. This is an array of pets that the component uses to render
// <Pet /> components.
// Should receive an onAdoptPet prop. This callback prop gets passed to its <Pet /> children
// components.

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

  //This callback needs to update <App />'s state.filters.type
  onChangeType = newType => {
    this.setState({
      filters: {type: newType }
    })
  }

  //When the <Filters /> component calls onFindPetsClick, <App /> should fetch a list of pets using fetch().
  // The URL of the API is /api/pets with an optional query parameter.
  // Use app's state.filters to control/update this parameter
  // If the type is 'all', send a request to /api/pets
  // If the type is 'cat', send a request to /api/pets?type=cat. Do the same thing for dog and micropig.
  // Finally set <App/>'s state.pets with the results of your fetch request so you can pass the pet
  // data down as props to <PetBrowser />
  //App should determine which pets to pass down as props. App should be
  // responsible for filtering this list based on the types of pets the user wants to see.
  onFindPetsClick = () => {
    const type = this.state.filters.type
    const endPoint = type === 'all' ? `/api/pets` : `/api/pets?type=${type}`

    fetch(endPoint)
      .then(response => response.json())
      .then(data => this.setState({ pets: data })) // add array of json objs to pets in state
  }


  onAdoptPet = (petId) => {
    const pets = this.state.pets.map(pet =>  pet.id === petId ? { ...pet, isAdopted: true } : pet )
    this.setState({ pets: pets })
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
  }
}

export default App
