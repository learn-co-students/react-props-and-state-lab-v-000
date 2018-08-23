import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  generatePets = () => {
    // map over your movieData array and return the correct
    return this.props.pets.map((pet, index) => <Pet key={index} pet={pet} onAdoptPet={this.props.onAdoptPet}/>)
  }

  render() {
    return <div className="ui cards">{this.generatePets()}</div>
  }
}

export default PetBrowser
