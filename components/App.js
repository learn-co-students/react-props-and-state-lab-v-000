import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.findPets = this.findPets.bind(this)
    this.adopt = this.adopt.bind(this)
  }

  handleChange(animal) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: animal
      })
    })
  }

  findPets() {
    var url = '/api/pets'
    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    }

    fetch(url).then(res => res.json()).then(pets => this.setState({ pets }))
  }

  adopt(id) {
    this.state.adoptedPets.push(id)
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
              <Filters filters={this.state.filters} onChangeType={this.handleChange} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adopt} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
