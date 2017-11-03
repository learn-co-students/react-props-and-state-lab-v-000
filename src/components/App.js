import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';
// import { getAll } from '../data/pets';

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
    // console.log('I am in handleFindPetsClick')
    const type = this.state.filters.type;
    if ( type === 'all') {
      //console.log('I am in all')
      fetch('/api/pets')
        .then(response => console.log('Response: ', response))
        .catch(error => console.log(error))//'The right API URL is not being fetched when finding pets.')
    } else if ( type ==='dog' || type === 'cat' || type === 'micropig') {
      fetch(`/api/pets?type=${type}`)
      .then(response => console.log('Response: ', response))
      .catch(error => console.log(error))
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
                onChangeType={inputType => this.setState({
                  filters: {
                    type: inputType
                  }})}
                onFindPetsClick={this.handleFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={id => this.setState({
                adoptedPets: [...this.state.adoptedPets, id]
              })}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
