import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

//line 7 manually put in
import { getAll } from '../data/pets';
const ALL_PETS = getAll();

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: ALL_PETS,
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  this.handleFilterChange = this.handleFilterChange.bind(this);
  this.handlePetsClick = this.handlePetsClick.bind(this);

  }

 //4 okay, so the petId we received way underneath from Pet class instance...
 // shove that into the App's state of adoptedPets array.
  handleAdoptPet = (petId) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId],
    });
  }

  handleFilterChange(type) {
    // debugger;
    this.setState({
      filters: {
        type: type,
      }
    })
  }

  handlePetsClick() {
    debugger;
  }

  render() {
    // debugger;
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.handleFilterChange}
                onFindPetsClick={this.handlePetsClick}
                filters={this.state.filters}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                adoptedPets={this.state.adoptedPets}
                onAdoptPet={this.handleAdoptPet}
                // 3. okay we've been foisted long enough...
                // let's deal with this with our own (App's) instance method
                // handleAdoptPet.
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
