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

  onChangeType = (newType) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: newType
      }
    })
  }

  onFindPetsClick = () => {
    var url = '/api/pets'
    if(this.state.filters.type != "all") {
      url += `?type=${this.state.filters.type}`
    }
    fetch(url)
      .then(res => res.json())
      .then(data => {
         data.forEach(pet => {
           this.setState({
             pets:
             [...this.state.pets, pet]
           })
         })
      })
  }

  onAdoptPet = (id) => {
    this.setState({
      adoptedPets:
      [...this.state.adoptedPets, id]
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
              <Filters filters={this.state.filters} onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.props.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
