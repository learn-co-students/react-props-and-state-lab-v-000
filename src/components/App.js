import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: "all"
      }
    };
  }

  onFindPetsClick = () => {
    let url = '/api/pets';

    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({ pets }));
  }

  handleOnChangeType = type => {
    this.setState({
      filters: {
        ...this.state.filters.type,
        type: type
      }
    });
  };

  onAdoptPet = id => {
    this.setState({
      adoptedPets: this.state.adoptedPets.concat(id),
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
              <Filters
                onChangeType={this.handleOnChangeType}
                filters={this.state.filters}
                onFindPetsClick={this.onFindPetsClick}

              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
