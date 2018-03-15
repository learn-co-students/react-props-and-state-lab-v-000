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

  onChangeType = (val)=> {
    this.setState({filters: {type: val}})
  }

  onFindPetsClick = ()=> {
    let url = "/api/pets",
        type = this.state.filters.type;
    if (type != 'all') 
      url += `?type=${type}`;
    
    fetch(url).then(function(response){
      this.setState({pets: response.pets.filter(pet=> pet.type == this.state.filters.type)})
    });
  }

  onAdoptPet = (pet_id)=> {this.setState({adoptedPets: this.state.adoptedPets.concat(pet_id)}) }

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
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} adoptedPets={this.state.adoptedPets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
