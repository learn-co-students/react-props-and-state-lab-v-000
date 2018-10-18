import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
// gets onAdoptPet and pets props from parent App

  generatePets = () => {
    return this.props.pets.map((pet, key) => <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet}/>)
  }
  render() {
    return <div className="ui cards">{this.generatePets()}</div>
  }
}

export default PetBrowser
