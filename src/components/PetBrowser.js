import React from 'react'

import Pet from './Pet'

const PetBrowser = ({pets, onAdoptPet}) => {

  const pet = pets.map(pet => <Pet pet={pet} key={pet.id} isAdopted={pet.isAdopted} onAdoptPet={onAdoptPet}/>);
    return <div className="ui cards">{pet}</div>

};

export default PetBrowser
