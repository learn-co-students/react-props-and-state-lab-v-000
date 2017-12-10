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

  handleFindPetsClick = () => {
    let filter = this.state.filters.type
    let url = "/api/pets"
    if (filter !== 'all') {
      url = url + `?type=${filter}`
    }

    fetch(url)
      .then((resp) => {
        resp.json()
      })
      .then((body) => {
        this.setState({
          pets: body
        })
      })
  }

  handleChangeType = (value) => {
    this.setState({
      filters: {
        type: value
      }
    })
  }

  handlePetAdopt = (id) => {
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
              <Filters filters={this.state.filters.type} onChangeType={this.handleChangeType} onFindPetsClick={this.handleFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handlePetAdopt}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
