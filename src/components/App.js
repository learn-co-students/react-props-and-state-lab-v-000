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

updateType = (target) => {
  const updatedType = {...this.state.filters, type: target}
  this.setState({filters: updatedType},() => {
    console.log(this.state.filters.type);
  })
}

adoptPet = (id) => {
  const newlyAdoptedPet = this.state.adoptedPets.concat(id);
  this.setState({adoptedPets: newlyAdoptedPet })
}

fetchPetsList = () => {
  let selection = this.state.filters.type
    if (selection !== 'all') {
    fetch(`/api/pets?type=${selection}`)
      .then(res => res.json())
      .then(pets => this.setState({pets: pets}))
  } else {
    fetch(`/api/pets`)
      .then(res => res.json())
      .then(pets => this.setState({pets: pets}))
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
              <Filters
                filters={this.state.filters.type}
                onChangeType={this.updateType}
                onFindPetsClick={this.fetchPetsList}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.adoptPet}
                adoptedPets={this.state.adoptedPets}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
