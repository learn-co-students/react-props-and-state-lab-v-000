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

  onChangeType = type => {
    this.setState({
      filters: {
        type: type 
      }
    }).then(function(){console.log(this.state)});
  }

  onFindPetsClick = () => {
    if (this.state.filters.type === "all") {
      fetch(`api/pets`).then(function(response){cb(response)})
    } else {
      fetch(`api/pets?type=${this.state.filters.type}`).then(function(response){cb(response)})
    };
    const cb = data => {
      this.setState({
        pets: data
      });
    };
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
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
