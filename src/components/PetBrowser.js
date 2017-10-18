import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  handlePetAdoption = (petID) => {
    this.props.onAdoptPet(petID);
  }

  render() {

    const pets = this.props.pets
    // console.log(pets[0])
    const myPet = pets.map(pet => {
      if (this.props.adoptedPets.includes(pet.id)) {
        return (
          <Pet
          isAdopted= {true}
          pet={pet}
          onAdoptPet={this.handlePetAdoption}
          />
        );
      } else {
        return (
          <Pet
          isAdopted= {false}
          pet={pet}
          onAdoptPet={this.handlePetAdoption}
          />
        );
      }
   });
    return (
      <div className="ui cards">
        {myPet}
      </div>
    );
  }
}



export default PetBrowser;
