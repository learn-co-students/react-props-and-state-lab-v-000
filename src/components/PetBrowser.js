import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  buildPetList = () => {
    let adoptedPets = this.props.adoptedPets;
    let pets = this.props.pets;
    let onAdoptPet = this.props.onAdoptPet;

    return pets.map(function (pet) {
      let isAdopted = false;

      if (adoptedPets.find(adoptedPetId => adoptedPetId === pet.id)) {
        isAdopted = true;
      };

      return <Pet key={pet.id} pet={pet} isAdopted={isAdopted} onAdoptPet={onAdoptPet} />
    })
  }

  render() {
    return (
      <div className="ui cards">
        {this.buildPetList()}
      </div>
    );
  }
}

export default PetBrowser;
