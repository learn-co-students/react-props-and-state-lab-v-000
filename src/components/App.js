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

  handleOnChangeType = (type) => {
    this.setState({
      filters: {
        type: type
      }
    })
  }

  handleFindPetsClick = () => {
    let url = '/api/pets'

    if (this.state.filters.type !== 'all') url += `?type=${this.state.filters.type}`

    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({pets}))
  }

  handleAdoptedPet = (id) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
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
                filters={this.state.filters}
                onChangeType={this.handleOnChangeType}
                onFindPetsClick={this.handleFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handleAdoptedPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
