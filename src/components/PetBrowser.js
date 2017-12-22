import React from 'react';
import Pet from './Pet';

const PetBrowser = ({ pets, onAdoptPet, adoptedPets }) => (
  <div className="ui cards">
    {pets.map(pet => (
      <Pet
        pet={pet}
        key={pet.id}
        onAdoptPet={onAdoptPet}
        isAdopted={adoptedPets.includes(pet.id)}
      />
    ))}
  </div>
);

export default PetBrowser;
