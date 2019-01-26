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

  handleChangeType = (e) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: e.target.value
      }
    })
  }

  handleFindPetsClick = () => {
    if (this.state.filters.type === 'all') {
      return fetch('/api/pets')
    } else {
      return fetch(`/api/pets?type=${this.state.filters.type}`)
    }
    .then(function(data) {
      return data.json()
    })
    .then(function(pets) {
      return pets
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
              <Filters onChangeType={e => this.handleChangeType(e)} onFindPetsClick={e => this.handleFindPetsClick(e)}/>
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
