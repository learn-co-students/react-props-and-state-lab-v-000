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
  
  onChangeType = (typeChange) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: typeChange
      }
    })
  }
  
  onFindPetsClick = () => {
    const typeOfPets = this.state.filters.type
    let baseurl = '/api/pets'
    
    if(typeOfPets !== 'all') {
      baseurl = `/api/pets?type=${typeOfPets}`
    }
    
    this.setState({
      ...this.state.pets,
      pets: fetch(baseurl).then(pets => { return pets })
    })
  }
  
  onAdoptPet = (petId) => {
    this.setState({
      ...this.state.adoptedPets,
      adoptedPets: [petId]
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
              <Filters filters={this.state.filters} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
