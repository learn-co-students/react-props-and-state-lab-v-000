import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';
import { getAll } from '../data/pets';

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
    this.setState({
      pets: getAll()
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
                onChangeType={inputType => this.setState({
                  filters: {
                    type: inputType
                  }})}
                onFindPetsClick={this.handleFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
