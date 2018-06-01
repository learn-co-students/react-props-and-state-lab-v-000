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

  changeType = type => {
    this.setState({
      filters: {...this.state.filters, type: type}
    })
  }

  findPets = () => {
    if(this.state.filters.type === 'all'){
      fetch('/api/pets').then(res => res.json()).then(pets => this.setState({pets}))
    }else{
      let pet = this.state.filters.type
      let url = `/api/pets?type=${pet}`
      fetch(url).then(res => res.json()).then(pets => this.setState({pets}))
    }
  }

  adoptPet = id =>{
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
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
              <Filters filters={this.state.filters.type} onChangeType={this.changeType} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
