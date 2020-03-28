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

  handleFindPetsClick = async () => {
    const { type } = this.state.filters;
    const URL = type !== "all" ? `/api/pets?type=${type}` : "/api/pets";
    const response = await fetch(URL);
    const pets = await response.json();
    this.setState({ pets });
  };

  handleChangeType = async type => {
    const { filters } = this.state;
    const newFilters = { ...filters, type };
    this.setState({ filters: newFilters });
  };

  handleAdoptPet = id => {
    const { pets } = this.state;
    const idx = pets.findIndex(pet => pet.id === id);
    pets[idx].isAdopted = true;
    const newPets = [...pets];
    this.setState({ pets: newPets });
  };

  render() {
    const { pets } = this.state;
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onFindPetsClick={this.handleFindPetsClick}
                onChangeType={this.handleChangeType}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handleAdoptPet} pets={pets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
