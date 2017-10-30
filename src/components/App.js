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
    this.handleChangeType = this.handleChangeType.bind(this)
    this.handleFindPets = this.handleFindPets.bind(this)
    this.handleAdoption = this.handleAdoption.bind(this)
  }

  handleChangeType = (type) => {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type,
      })
    })
  }

  handleFindPets(){
    let url = '/api/pets'

    if (this.state.filters.type !== 'all'){
      url += `?type=${this.state.filters.type}`
    }

    fetch(url)
      .then(result => result.json())
      .then(pets => this.setState({ pets }))
  }

  handleAdoption = (petId) => {
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
              <Filters filters={this.state.filters} onChangeType={this.handleChangeType} onFindPetsClick={this.handleFindPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
              adoptedPets={this.state.adoptedPets}
              onAdoptPet={this.handleAdoption}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
