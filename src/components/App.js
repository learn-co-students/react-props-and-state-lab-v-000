import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [
        {
          "id": "5c142d9e-ea45-4231-8146-cccf71c704c0",
          "type": "dog",
          "gender": "male",
          "age": 4,
          "weight": 1,
          "name": "Trident"
        },
        {
          "id": "2c902312-dfa3-446f-8b4b-5e115170d807",
          "type": "cat",
          "gender": "male",
          "age": 3,
          "weight": 1,
          "name": "Teddy"
        },
        {
          "id": "6057de4f-6725-4b9f-a0b1-1f3bd3ad04a6",
          "type": "cat",
          "gender": "male",
          "age": 2,
          "weight": 5,
          "name": "Hemingway"
        }],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }


  isAdopted = (petId) =>  {debugger
   return this.state.adoptedPets.includes(petId)}
  changeAppState = (value) => {this.setState({filters: {type: value}})}

  fetchPets = () => {
    var url = "/api/pets"
    if (this.state.filters.type != 'all') {
      url = url + `?type=${this.state.filters.type}`
    }
    fetch(url).then((pets) => {this.setState({pets: pets})})
  }

  adoptPet = (petId) => {this.setState({adoptedPets: this.state.adoptedPets.concat([petId])})}


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onFindPetsClick={this.fetchPets} onChangeType={this.changeAppState} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
