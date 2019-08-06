import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    const { pets, onAdoptPet } = this.props;
    const renderPets = pets.map(pet =>
      <Pet key={pet.id} name={pet.name} onAdoptPet={onAdoptPet} />
  )

    return <div className="ui cards">{renderPets}</div>
  }
}

export default PetBrowser
