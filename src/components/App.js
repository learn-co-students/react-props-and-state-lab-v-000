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

  // **Need to find out how to send right data to handleTypeChange

  handleTypeChange = (newType) => {
    this.setState({ 
      filters: {
        ...this.state.filters,
          type: newType}
        });
  }

  onFindPetsClick = () => {
    let endpoint = '/api/pets';
    console.log(this.state.filters.type)

    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`;
    }

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify
    };
  return fetch(endpoint, requestOptions)
    .then(response => response.json())
    .then(data => this.setState({
      pets: data
    }))
  }

// Set <App/>'s state.pets with the results of your fetch request so you can 
// pass the pet data down as props to <PetBrowser />

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
                onChangeType={this.handleTypeChange} 
                onFindPetsClick={this.onFindPetsClick.bind(this)}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={null} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
