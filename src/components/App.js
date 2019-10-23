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

  onChangeType = ({ target: { value } }) => {
    this.setState({ filters: { ...this.state.filters, type: value } });
  };

  onFindPetsClick = () => {
    let endpoint = '/api/pets';

    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`;
    }

    fetch(endpoint)
      .then(res => res.json())
      .then(data => this.setState({ data }));
  };

  

  
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
              onFindPetsClick={this.onFindPetsClick} 
              onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
