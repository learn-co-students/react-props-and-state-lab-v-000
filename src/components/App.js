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

  fetchPets(type) {
    let url
    if (type === "cat" || type === "dog" || type === "micropig") {
      url = `/api/pets?type=${type}`
    } else {
      url = `/api/pets`
    }
    fetch(url)
      .then(res => res.json())
      .then(
        (results) => {
          console.log(results)
          
          // this.setState({
          //   isLoaded: true,
          //   items: result.items
          // });
        }//,
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        // (error) => {
        //   this.setState({
        //     isLoaded: true,
        //     error
        //   });
        // }
      )
  }

  changeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onFindPetsClick = (event) => {
    this.fetchPets(this.state.filters.type)
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
              <Filters onChangeType={this.changeType} onFindPetsClick={this.onFindPetsClick} />
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
