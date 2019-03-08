import React, { Component } from "react"
import Filters from "./Filters"
import PetBrowser from "./PetBrowser"

export default class App extends Component {
  state = {
    pets: [],
    filters: {
      type: "all"
    }
  };

  onChangeType = event => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    });
  };

  onFindPetsClick = () => {
    let uri = "/api/pets";
    if (this.state.filters.type !== "all") {
      uri += `?type=${this.state.filters.type}`;
    }

    fetch(uri)
      .then(response => response.json())
      .then(pets => this.setState({ pets }));
  };

  onAdoptPet = id => {
    const pets = this.state.pets.map(pet => {
      if (pet.id === id) {
        return { ...pet, isAdopted: true };
      } else {
        return pet;
      }
    });
    this.setState({ pets });
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
                onChangeType={event => this.onChangeType(event)}
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
