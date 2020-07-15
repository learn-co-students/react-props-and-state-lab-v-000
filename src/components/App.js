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

  handleTypeChange() {
    this.setState({ 
      filters: {
        ...this.state.filters,
          type: type}
        });
  }

  onFindPetsClick = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify
    };
    fetch('http://localhost:3000/api/pets')
  // fetch('http://localhost:3000/api/pets', requestOptions)
      .then(response => console.log(response));
      // .then(data => this.setState({ postId: data.id }));
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
                onChangeType={this.handleTypeChange()} 
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
