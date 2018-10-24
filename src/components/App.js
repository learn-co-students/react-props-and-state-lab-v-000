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
  
  onChangeType = (event) => {
//	  debugger
    this.setState ({
      filters: {
	...this.state.filters,
        type: event.target.value
      }
    });
  }
 
  onFindPetsClick = (state) => {
    var uri = '/api/pets';
///    debugger 
    if (state.type !== 'all' && state.type !== '') {
	    uri += '?type=' + state;
    }
//	debugger
    fetch(uri)
	  .then((res) => { console.log(res)} )
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
	    	onChangeType ={this.onChangeType}
		onFindPetsClick ={this.onFindPetsClick}	        
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
