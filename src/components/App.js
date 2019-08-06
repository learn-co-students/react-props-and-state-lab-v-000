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
    this.setState({ filters: {
       ...this.state.filters, 
       type: value } })
  }

  onFindPetsClick = () => {
    let url = '/api/pets';

    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({ pets }));
      
    // if the type is all, fetch('/api/pets')
    // if the type is cat, fetch(/api/pets?type=cat)
    // if the type is dog, fetch(/api/pets?type=dog)
    // if the type is micropig, fetch(/api/pets?type=micropig)
    // // fetch('/api/pets')
    // fetch('/api/pets?type=cat')
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data)
    //setState state.pets pass the pet data down as props to <PetBrowser />
    // })
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
              // onFetchPets={this.onFetchPets}
              onFindPetsClick={this.onFindPetsClick}

              />
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
