import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filters: {
        type: this.props.filters
      } 
    }
  }

  render() {
    const filteredPets = this.props.pets.map(individualPet => {
      return <div key="individualPet.id"><Pet pet={individualPet} onAdoptPet={this.props.onAdoptPet}/></div>
    }); 

    return (
      <div className="ui cards">{filteredPets}</div>
    ) 
  }
}

export default PetBrowser
