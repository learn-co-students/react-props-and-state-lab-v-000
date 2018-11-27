import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  generatePets = (props) => {
    return Array.from(this.props.pets).map((pet, i) => (
      <div key={i}><Pet pet={pet} onAdoptPet={this.props.onAdoptPet}/></div>
    ))
  }  
  
  render() {
    return <div className="ui cards">{this.generatePets()}</div>
  }
}

export default PetBrowser
