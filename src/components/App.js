import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  onAdoptPet = (id) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    });
  }

  onChangeType = (type) => {
    this.setState({
      filters: {
        type: type
      }
    });
  }

  onFindPetsClick = () => {
    const urls = {
      'all': '/api/pets',
      'cat': '/api/pets?type=cat',
      'dog': '/api/pets?type=dog',
      'micropig': '/api/pets?type=micropig',
    }

    const url = urls[this.state.filters.type]
    fetch(url).then(this.updatePets);
  }

  updatePets = (response) => {
    response.json().then(json => {
      this.setState({ pets: json})
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
              <Filters filters={this.state.filters} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
