import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const {pets, adoptedPets, onAdoptPet} = this.props;

    const renderPets = pets.map((pet) => 
      <Pet 
      pet={pet}
      onAdoptPet={onAdoptPet}
      isAdopted={adoptedPets.includes(pet.id)}
      />
    );

    return (
      <div className="ui cards">
        {renderPets}
      </div>
    );
  }
}

export default PetBrowser;