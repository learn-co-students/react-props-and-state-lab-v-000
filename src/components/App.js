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
     this.findPets = this.findPets.bind(this);
  }

  updateFilter = (event) => {
    let type = event.target.value;
    this.setState({
      filters: {...this.state.filters, type: type
      }
    })
  }

  findPets = () => {
    let query = this.state.filters.type;
    console.log('Query:', query)
    if (query === 'all') {
       fetch('/api/pets')
        .then(response => response.json())
        .then(pets => this.setState({pets}));
    } else {
      fetch('/api/pets?type='+ query)
        .then(response => response.json())
        .then(pets => this.setState({pets}));
        //having pets as the argument name sets the key to 'pets' immediately
        //Having the fat arrow functions gets 'this' to be the component and not undefined
        //both 'then's are needed to change it into a json object first, and then to manipulate it second
    }
  }
    adoptPet = (petId) => {
      const pets = this.state.pets.map(p => {
        return p.id === petId ? { ...p, isAdopted: true } : p;
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
              <Filters onChangeType={this.updateFilter} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
