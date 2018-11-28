import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeFilterType = (event) => {
    //debugger;
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: event.target.value,
      }),
    }, () => {console.log(this.state.filters.type)})
    //debugger;
  }

  fetchPets = () => {
    let endpoint = '/api/pets';
    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`;
    }
    //const pets = fetch('/api/pets').then((resp) => resp.json()).then(pets => {return pets})
    //console.log(pets);
    //debugger;
    fetch(endpoint)
      .then(res => res.json())
      .then(pets => this.setState({pets}));
        //this.setState({ pets })
        //);
      //debugger;
  };


  changePetStatus = (event) => {
    return null
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
              <Filters onChangeType={this.changeFilterType} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.changePetStatus} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
