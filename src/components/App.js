import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: ['all', 'cat', 'dog', 'micropig']
      }
    }
  }

onFindPetsClick = () => {
  // const url = '/app/pets'
    if (this.state.filters.type == 'all'){ 
    fetch(`/api/pets`)
    .then(response => response.json())
    .then(data => console.log(data))
    } elsif (this.state.filters.type == 'cat'); {
      fetch(`/api/pets/${'?type=cat'}`)
      .then(response => response.json())
      .then(data => console.log(data))
    } elsif (this.state.filters.type == 'dog'); {
      fetch(`/app/pets/${'?type=dog'}`)
      .then(response => response.json())
      .then(data => console.log(data))
      } else {
        fetch(`/api/pets/${'?type=micropig'}`)
        .then(response => response.json())
        .then(data => console.log(data))
      }
}
  // switch(url){
  //   url = `/app/pets`
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   fetch(`/api/pets${'?type=cats'}`)
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }
//   if(this.state.filters.type !== 'all'){
//     elsif(this.state.filters.type == 'cat') {
//     fetch(`/api/pets${?type=cat}`)
//     }
//   } else {
//     fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))
//   }
// }
//   onChangeType = event => {
//     this.setState({
//       filters: {
//         ...this.state.filters,
//         type: event.target.value
//       }

//     })
  


  // onFindPetsClick => event {

  // }
  

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
              {/* <Filters /> */}
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
