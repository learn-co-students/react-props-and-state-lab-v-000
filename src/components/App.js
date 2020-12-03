import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();
    this.fetchUrl();
    this.state = {
      pets: [],
      filters: {
        type: "all",
      },
    };
  }

  fetchUrl = (type) => {
    const url =
      !type || type === "all" ? "/api/pets" : `/api/pets?type=${type}`;
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({ pets: json });
      });
  };

  onChangeType = (event) => {
    this.setState({
      ...this.state,
      filters: {
        type: event.target.value,
      },
    });
  };

  onFindPetsClick = () => {
    this.fetchUrl(this.state.filters.type);
  };

  onAdoptPet = (id) => {
    const pet = this.state.pets.find((pet) => pet.id === id);
    pet.isAdopted = true;

    this.setState({
      ...this.state,
      pets: this.state.pets,
    });
  };

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
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
