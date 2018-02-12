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
  onAdoptPet = (petId) =>{
    this.setState({adoptedPets: [...this.state.adoptedPets, petId] })
  }
  onChangeType = (value)=> {
    this.setState({filters: {type: value}})

  }
  onFindPetsClick = ()=> {
    const type = this.state.filters.type
    if (type === "all") {
      return fetch("/api/pets")
      .then((response) => response.json())
    .then((responseJson) => {
      this.setState({pets: responseJson})
    })
    .catch((error) => {
      console.error(error);
    });
  } else {
    return fetch(`/api/pets?type=${type}`)
    .then((response) => response.json())
  .then((responseJson) => {
    this.setState({pets: responseJson})
  })
  .catch((error) => {
    console.error(error);
  });
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
              <Filters filters={this.state.filters} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
