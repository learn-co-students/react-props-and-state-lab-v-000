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

  onChangeType = event => {
    event.persist()
    this.setState(
      {
        filters: {
          ...this.state.filters,
          type: event.target.value
        }
      },
      ()=>console.log('updated state: ', this.state.filters) // to test to see if state changed
    )
  }

  listPets = () => {
    let url = '/api/pets'
    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    }
    console.log('this is the value to use on with the fetch call: ', url)
    fetch(url)
      .then(resp=>resp.json())
      .then(pets=> this.setState({pets}, () => console.log('this is the revised state after updating with the search field: ', this.state))
      )
    
  }

  adoptPet = () => {
    // need to update state, etc. on this.... pass instructions to update UI.
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
                onChangeType={this.onChangeType}
                onFindPetsClick={this.listPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdopt={this.adoptPet} />
              {console.log(this.state.pets)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
