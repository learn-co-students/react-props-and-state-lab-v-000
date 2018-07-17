import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const pet_components = this.props.pets.map((pet) => {
      return <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} /> 
    })

    return (
      <div className="ui cards">{pet_components}</div>
    )
  }
}

export default PetBrowser
