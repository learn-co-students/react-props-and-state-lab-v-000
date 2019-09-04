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

  onChangeType = (filterType) => {
    this.setState({
      filters: {
        type: filterType
      }
    })
  };

  setResponseState = (response) => {
    this.setState({
      pets: response, 
    })
  }

  onFindPetsClick = () => {

    let petUrl; 

    if (this.state.filters.type === "all") {
      petUrl = "/api/pets"
    } else {
      petUrl = "/api/pets?type=" + this.state.filters.type
    }

    fetch(petUrl).then(response => this.setResponseState(response));
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
