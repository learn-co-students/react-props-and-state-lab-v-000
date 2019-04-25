import React from 'react'

import Pet from './Pet'

// this.props.pets
// this.props.onAdoptPet

class PetBrowser extends React.Component {

  render() {
    const petsArrComponent = this.props.pets.map((pet) => (
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    ))
    return <div className="ui cards">{petsArrComponent}</div>
  }
}

export default PetBrowser
