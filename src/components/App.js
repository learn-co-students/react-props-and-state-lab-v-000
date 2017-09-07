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

  handleChangeFilterType = (type) => {
    this.setState((prevState, props)=>({
      filters: {...prevState.filters, type:type}
    }));
  }

  handleFindPets = ()=> {
    let url = '/api/pets';
    if (this.state.filters.type!=='all') {
      url += `?type=${this.state.filters.type}`
    }
    fetch(url)
      .then(response=> response.json())
      .then(pets => this.setState((prevState, props)=>{
        pets: pets
      }))
  }

  handleAdoptPet = (petId)=> {
    this.setState((prevState, props)=>(
      {adoptedPets: [...prevState.adoptedPets, petId],}
    )
    );
    // this.setState({
    //   adoptedPets: [...this.state.adoptedPets, petId],
    // });
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
              <Filters filters={this.state.filters} onChangeType={this.handleChangeFilterType} onFindPetsClick={this.handleFindPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoptPet} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
