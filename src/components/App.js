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
    let URL ="/api/pets"

    if (this.state.filters.type !== 'all') {
      URL += `?type=${this.state.filters.type}`;
    }

    fetch(URL)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                pets: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }


  onChangeType = (value) => {
    this.setState({
     filters: {...this.state.filters, type: value}
   })
  }

  onAdoptPet = petId => {
  const pets = this.state.pets.map(pet =>{
    return pet.id === petId ? { ...pet, isAdopted: true } : pet;
    });
    this.setState({ pets });
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
              <Filters onChangeType={value => this.onChangeType(value)} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser value={this.state.filters.value} pets={this.state.pets} onAdoptPet={petId => this.onAdoptPet(petId)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
