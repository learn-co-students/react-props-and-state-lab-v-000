import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const {onAdoptPet, adoptedPets} = this.props;
    console.log(adoptedPets)
    const pets = this.props.pets.map((pet, index) => {
      console.log(pet.id)
      return <Pet pet={pet} key={index} onAdoptPet={onAdoptPet} isAdopted={adoptedPets.filter(id => id == pet.id).length > 0 ? true: false} />
    });

    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

module.exports = PetBrowser;
