import React from 'react'

import Pet from './Pet'

const PetBrowser = ({pets, onAdoptPet}) => {
  const PetCards = pets.map(pet => <Pet pet={pet} key={pet.id} onAdoptPet={onAdoptPet} />)

  return <div className="ui cards">{PetCards}</div>
}


export default PetBrowser
