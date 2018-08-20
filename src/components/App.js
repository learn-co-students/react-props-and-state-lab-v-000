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
  
  // Function for updating filters type
  onChangeType = (event) => {
    console.log('app change filter type : ', event)
      this.setState({
        filters: {
          ...this.state.filters,
          type: event,
        },
      }, () => {console.log(this.state.filters.type)})
  }
  
  // Fetch pet data
  fetchData = (url) => {
    return fetch(url).then((response) =>
      this.setState({
          pets: response
        }, () => {console.log('fetch response : ', response)}))
  }
    
  // Function for fetching pets
  onFindPetsClick = () => {
    console.log('fetch pets')


    // Determine which url to fetch
    switch(this.state.filters.type) {
      case 'all':
          console.log('fetch all pets')
          this.fetchData('/api/pets')
          break;
      case 'cat':
          console.log('fetch all cats')
          this.fetchData('/api/pets?type=cat')
          break;
      case 'dog':
          console.log('fetch all dogs')
          this.fetchData('/api/pets?type=dog')
          break;
      case 'micropig':
          console.log('fetch all micropigs')
          this.fetchData('/api/pets?type=micropig')
          break;
      default:
          console.log('switch default')
    }
  }

  // Function for pet props
  onAdoptPet = () => {
    
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
              <Filters onChangeType={(event) => {this.onChangeType(event)}} onFindPetsClick={(event) => {this.onFindPetsClick(event)}} />
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
