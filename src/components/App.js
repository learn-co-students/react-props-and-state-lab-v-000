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

  handleChangeFilterType = (value) => {
    this.setState({ filters: { ...this.state.filters, type: value} })
  }

  handleAdoptPet = (petId) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId],
    });
  }

  onFindPetsClick(){
    this.fetchPets()
  }

  fetchPets = () => {
    const petUrl = this.state.filters.type !== 'all' ? `/api/pets?type=` + this.state.filters.type : `/api/pets`

    fetch(petUrl)
      .then((response) => response.json())
      .then((pets) => {
        this.setState({ pets })
      })
      .catch((error) =>{
        console.error(error);
      });
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
                filters={this.state.filters}
                onChangeType={this.handleChangeFilterType}
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                adoptedPets={this.state.adoptedPets}
                onAdoptPet={this.handleAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
