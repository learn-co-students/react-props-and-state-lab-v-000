import React from 'react';
import 'whatwg-fetch';

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
    this.setState({
      filters:
        Object.assign({},
          this.state.filters,
          {type: type
        })
    }, console.log("it is " + this.state.filters.type))
  }

  handlePetAdoption = (id) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  handleFindPet = () => {
    var path = "/api/pets";

    switch (this.state.filters.type){
      case "cat":
        path += "?type=cat"
        break;
      case "dog":
        path += "?type=dog"
        break;
      case "micropig":
        path += "?type=micropig"
        break;
      default:
        path += ''
        break;
    }

    fetch(path)
      .then(response => {return response.json()})
      .then( data => {
        this.setState({
          pets: data
        })
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
              <Filters filters={this.state.filters} onChangeType={this.handleChangeFilterType} onFindPetsClick={this.handleFindPet}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
                onAdoptPet={this.handlePetAdoption}
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
