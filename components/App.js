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
    };
    this.change = this.change.bind(this);
    this.find = this.find.bind(this);
    this.adopt = this.adopt.bind(this);
  }

  change(type){
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type
      })
    })
  }

  find(){
    let url = '/api/pets';

    if (this.state.filters.type === 'all') {
      url
    } else {
      url += `?type=${this.state.filters.type}`
    }

    fetch(url)
      .then(res => res)
  }

  adopt(id){
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
                onChangeType={this.change}
                onFindPetsClick={this.find}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adopt}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
