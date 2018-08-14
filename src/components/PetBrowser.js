import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  generatePets = (pets) => (
    pets.map((pet, idx) => <Pet key={idx} pet={pet} onAdoptPet={this.props.onAdoptPet} />)
  )

  render() {
    return <div className="ui cards">{this.generatePets(this.props.pets)}</div>
  }
}

export default PetBrowser
