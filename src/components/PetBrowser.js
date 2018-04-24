import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {

    const pets = this.props.pets
    const adoptedPets = this.props.adoptedPets

    function checkAdoption (id) {
      // if adoptedPets include id than is adopted
      if (adoptedPets.includes(id)) {
        return true
      }
      else {
        return false
      }
    }

    var petComponents = pets.map((pet)=> <Pet pet={pet} isAdopted={checkAdoption(pet.id)} onAdoptPet={this.props.onAdoptPet}/>)

    return (
      <div className="ui cards">
        {petComponents}
      </div>
    );
  }
}

export default PetBrowser;
