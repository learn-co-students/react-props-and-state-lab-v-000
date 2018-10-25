import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const adoptFunction = this.props.onAdoptPet
    const petCards = this.props.pets.map(function(pet) {
      return <Pet pet={pet} id={pet.id} onAdoptPet={adoptFunction}/>
    })

    return (
      <div className="ui cards">{petCards}</div>
    )
  }
}

export default PetBrowser
