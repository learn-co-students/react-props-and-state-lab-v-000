import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  onAdoptPet = (onAdoptPet) => {
   this.setState({
     adoptedPets: [...this.state.adoptedPets, onAdoptPet]
   })
  }

  handleOnChange =  (onChangeType) => {
    this.setState({
      filters: {
        type: onChangeType
      }
    })
  }

  handleOnFindPetsClick = () => {
    if(this.state.filters.type == 'all') {
      fetch('/api/pets')
      .then( results => {
        return results.json()
      }).then(pets => this.setState({pets: pets}))
    } else {
      fetch('/api/pets?type=' + this.state.filters.type)
      .then( results => {
        return results.json()
      }).then(pets => this.setState({pets: pets}))
    }
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
              <Filters onChangeType = {this.handleOnChange}  onFindPetsClick = {this.handleOnFindPetsClick} filters = {this.state.filters} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets= {this.state.pets} adoptedPets= {this.state.adoptedPets} onAdoptPet={this.onAdoptPet}/>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
