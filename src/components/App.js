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

  handlePetChange = (petFilter) => {
    this.setState({filters: {type: petFilter}})
  }

  fetchPets = () => {
     const petType = this.state.filters.type
     if (petType === 'all') {
       fetch('/api/pets').then(results => {
         return results.json();
       }).then(data => {
         this.setState({
           pets: data
         })
       })
     }
     else {
       fetch('/api/pets?type=' + petType).then(results => {
         return results.json();
       }).then(data => {
         this.setState({
           pets: data
         })
       })
     }
  }

  handleAdopt = (petId) => {
    let adopted = this.state.adoptedPets;
    adopted.push(petId);
    this.setState({
      adoptedPets: adopted
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
              <Filters
                filters={this.state.filters}
                onChangeType={this.handlePetChange}
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
              pets= {this.state.pets}
              adoptedPets={this.state.adoptedPets}
              onAdoptPet= {this.handleAdopt}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
