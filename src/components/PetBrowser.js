import React from 'react';
import Pet from './Pet';

class PetBrowser extends React.Component {

  onAdoptPet(){

  }

  isAdopted(pet){

  }


  render() {
    // same as const pets = this.props.pets;
    const { pets, onAdoptPet, adoptedPets } = this.props;



    return (
      <div className="ui cards">
      console.log(this)
      {pets.map(pet => (
        <Pet
        key={pet.id}
        pet={pet}
        onAdoptPet={onAdoptPet}
        isAdopted={adoptedPets.includes(pet.id)}
        />
      ))}
      </div>
    );
  }
}

export default PetBrowser;
