import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let newPets = this.props.pets.map((pet, index) =>  (
      <div key={index} className="ui cards"><Pet pet={pet} onAdoptPet={this.props.onAdoptPet} /></div>
    ))
    
    return <div>{newPets}</div>
  }
}

export default PetBrowser
