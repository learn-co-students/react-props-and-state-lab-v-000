import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  render() {
    return <div className="ui cards">
		  <Pet
	  	
	  	  />
	   </div>
  }
}

export default PetBrowser
