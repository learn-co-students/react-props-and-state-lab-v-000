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

    // this.changeType = this.changeType.bind(this);
    // this.setPetState = this.setPetState.bind(this);
    // this.fetchPets = this.fetchPets.bind(this);
  }

  changeType = (eventType) => {
    // const value = event.target.value;
    // console.log(value)
    this.setState({
      filters: {
        ...this.state.filters,
        type: eventType,
      }
    })
    
  }

  adoptPet = (id) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  fetchPets = () => {
    const type = this.state.filters.type;
    if (type === 'all') {
      fetch(`/api/pets`)
        .then(res => res.json())
        .then(pets => {this.setState({
          pets: pets
        })
      })    
    } else {
      fetch(`/api/pets?type=${type}`)
        .then(res => res.json())
        .then(pets => {this.setState({
          pets: pets
        })
      })  
    }
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
                filters={this.state.filters.type}
                onChangeType={this.changeType} 
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets} 
                onAdoptPet={this.adoptPet}
                adoptedPets={this.state.adoptedPets}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;