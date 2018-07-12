import React from 'react'
import PropTypes from 'prop-types'

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

  onChangeType = event => {
    debugger
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value,//how do I update dynamically?
      }
    }, () => console.log(this.state.filters.type))
  }

  fetchPets = () => {
    let url = "/api/pets";
    if (this.state.filters.type !== "all") {
      url += `?type=${this.state.filters.type}`;
    } 
    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState( { pets }) );
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.fetchPets} />
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

// App.propTypes = {
//   onChangeType: PropTypes.func,
//   onFindPetsClick: PropTypes.func,

// }

export default App
