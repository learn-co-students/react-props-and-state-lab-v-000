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

  searchTerm = (term) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: term
      }
    })
  }

  loadPets = () => {
    if (this.state.filters.type === 'all') {

      fetch('/api/pets')
        .then( response => {
           return response.json();
        })
        .then( pets => {
            this.setState({
              pets: pets
             })
          }
        )
    }else{
      fetch('/api/pets?type='+ this.state.filters.type)
        .then( response => {
           return response.json();
        })
        .then( pets => {
            this.setState({
              pets: pets
             })
             console.log(this.state.pets)

           }
         )
      }
  }

    onAdoptPet = petId => {
      const pets = this.state.pets.map(p => {
        return p.id === petId ? { ...p, isAdopted: true } : p;
      });
      this.setState({ pets });
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
              <Filters onChangeType={this.searchTerm} onFindPetsClick={this.loadPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser  pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
