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

  changeType = (event) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      },
    })
  }

  findPets = () => {
    if (this.state.filters.type == 'all') {
      let allPets = fetch('/api/pets')

      this.setState({
        pets: allPets
      })

    } else {
      let param = this.state.filters.type
      let paramPets = fetch(`/api/pets?type=${param}`)
      this.setState({
        pets: paramPets
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
              <Filters onChangeType={this.changeType}
                onFindPetsClick={this.findPets}
                filters={this.state.filters.type} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
