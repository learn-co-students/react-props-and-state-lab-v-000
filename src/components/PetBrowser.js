import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  render() {
    let adopted = this.props.adoptedPets
    let allPets = this.props.pets.map((thisPet) =>
      <Pet
      pet = {thisPet}
      isAdopted = {adopted.includes(thisPet.id)}
      onAdoptPet = {this.props.onAdoptPet}
      />
    )
    return (
      <div className="ui cards">
        {allPets}
      </div>
    );
  }
}

export default PetBrowser;
