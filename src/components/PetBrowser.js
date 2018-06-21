import React from 'react';

import Pet from './Pet';

const PetBrowser = ({ pets, onAdoptPet, isAdopted }) => {
  const petCards = pets.map(pet => <Pet pet={pet} key={pet.id} onAdoptPet={onAdoptPet} isAdopted={pet.isAdopted} />);

  return <div className="ui cards">{petCards}</div>;
};

export default PetBrowser;
