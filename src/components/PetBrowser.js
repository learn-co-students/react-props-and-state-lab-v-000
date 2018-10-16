import React from 'react';

import Pet from './Pet';

const PetBrowser = ({ pets, onAdoptPet }) => {
  const petCard = pets.map(pet => <Pet pet={pet} key={pet.id} onAdoptPet={onAdoptPet} />);
  return <div className="ui cards">{petCard}</div>
};

export default PetBrowser;
