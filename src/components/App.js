
import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()
    // Set initial state
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = ({target: { value }}) => {
    // update <App />'s state.filters.type
    this.setState({
      filters:{
        type: value 
      }
    })
  }

  onFindPetsClick = () => {
    // fetch a list of pets using fetch()

    let url = '/api/pets' // All pets
   
    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}` // A specific pet type; e.g. /api/pets?type=cat
    }

    fetch(url)
      .then(response => response.json())
      .then(pets => this.setState({ pets },() => console.log("*** pets:", pets)))
  }

  onAdoptPet = petId => {
    const pets = this.state.pets.map(pet => {
      // Set isAdopted to true for the adopted pet
      return pet.id === petId ? { ...pet, isAdopted: true } : pet
    })
    // Update the pets array
    this.setState({ pets })
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
