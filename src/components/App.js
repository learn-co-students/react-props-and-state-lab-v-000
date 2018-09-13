import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }

  applyFilter = value => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: value
      }
    });
  };

  fetchPets = e => {
    const pet = this.state.filters.type;
    let root;
    var arr;

    if (pet === "all") {
      root = "/api/pets";
    } else if (pet === "cat") {
      root = "/api/pets?type=cat";
    } else if (pet === "dog") {
      root = "/api/pets?type=dog";
    } else {
      root = "/api/pets?type=micropig";
    }

    fetch(root)
      .then(response => response.json())
      .then(json => {
        this.setState({
          pets: json
        });
        console.log(json);
      });
  };

  adoptPet = e => {
    this.state.pets.forEach(pet => {
      if (pet.id === e) {
        pet.isAdopted = true;
      }
    });
    this.setState({
      pets: this.state.pets
    });
  };

  // adoptPet = petId => {
  //   const pets = this.state.pets.map(p => {
  //     return p.id === petId ? { ...p, isAdopted: true } : p;
  //   });
  //   this.setState({ pets });
  // };

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
                onChangeType={this.applyFilter}
                onFindPetsClick={this.fetchPets.bind(this)}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser petState={this.state.pets} getPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
