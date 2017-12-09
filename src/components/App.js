import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';
import Pet from './Pet';

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


  fetchPets = () => {
    let url = '/api/pets';

    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({ pets }));
  }

  handleChange = (type) => {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type,
      })
    });
  };

  handleAdopt = petId => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId],
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
              <Filters filters={this.state.filters} 
                onChangeType={this.handleChange}
                onFindPetsClick={this.fetchPets}

               />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                adoptedPets={this.state.adoptedPets}  
                pets={this.state.pets} 
                onAdoptPet={this.handleAdopt}
              />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
