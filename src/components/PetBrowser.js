import React from 'react'

import Pet from './Pet'

const PetBrowser = ({
  pets, onAdoptPet
}) => {
  const petList = pets.map((pet) => {
    return <Pet pet={pet} key={pet.id} onAdoptPet={onAdoptPet}/>
  })
  console.log(petList);
  return <div className="ui cards">{petList}</div>
}

export default PetBrowser
