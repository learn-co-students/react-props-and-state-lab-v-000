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

  ctype = (typenew) => {
    console.log('changing type');
    const new1 = typenew
        this.setState({
          filters: {
            ...this.state.filters,
            type: new1,
          }
        });
  };

  getFilterType = () => (this.state.filters.type)
  getpets = () => (this.state.pets)

  pclick = () => {

    const filter = this.getFilterType()
    if (filter == 'all') {
    fetch(`/api/pets`)
   .then(response => response.json())
   .then(data => this.setState({ pets: data }));
    } else {
      fetch(`/api/pets?type=${filter}`)
     .then(response => response.json())
     .then(data => this.setState({ pets: data }));
    }
    console.log(this.state.pets)
  }

  onAdoptPet = () => {
    console.log('adopt pet');
  }

  render() {
    console.log(this.state.pets)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.ctype} onFindPetsClick={this.pclick} getFilterType={this.getFilterType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
            <h3>{this.state.filters.type}</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default App
