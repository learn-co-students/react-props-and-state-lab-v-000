import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const listPets = this.props.pets.map(pet =>
      <Pet pet={this.props.pet}
      isAdopted={this.props.adoptedPets.include(pet.id) ? true : false}
      onAdoptPet={this.props.onAdoptPet} />
    )
    return <div className="ui cards">{listPets}</div>
  }
}

export default PetBrowser
