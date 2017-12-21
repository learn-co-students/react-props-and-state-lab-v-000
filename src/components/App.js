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

  onChangeType = (data) => {
    this.setState({
      filters: {
        type: data
      }
    })
  }

  onAdoptPet = (data) => {
    console.log(data)
    var adoptedPets = this.state.adoptedPets
    adoptedPets.push(data)
    this.setState({
      adoptedPets: adoptedPets
    })
    console.log(adoptedPets)
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

  render() {

    if (this.state.filters.type == 'all') {
      fetch('/api/pets')
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
    }


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
                onChangeType={this.onChangeType}
                onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                adoptedPets={this.state.adoptedPets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
