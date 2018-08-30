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

  onChangeType = ({target: {value}}) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: value
      }
    })
  }

  // onChangeType = (event) => {
  //   debugger;
  //   this.setState({
  //     filters: {
  //       ...this.state.filters,
  //       type: event.target.value
  //     }
  //   })
  // }


  fetchPetsOnClick = () => {
    let selection = this.state.filters.type 
    let url = '/api/pets'

    if (selection !== 'all') {
      url += `?type=${selection}`
    }

    fetch(url)
    .then(resp => resp.json())
    .then(pets => this.setState({pets}))
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.fetchPetsOnClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
