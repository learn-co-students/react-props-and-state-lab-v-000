import React from 'react'

import Pet from './Pet'

const PetBrowser = ({ pets, onAdoptPet }) => {
  const allPets = pets.map(pet => <Pet pet={pet} key={pet.id} onAdoptPet={onAdoptPet}/>)
  return <div className="ui cards">{allPets}}</div>
}

export default PetBrowser
