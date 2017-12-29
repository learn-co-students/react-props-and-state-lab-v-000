import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  render() {
    let adopted = this.props.adoptedPets
    debugger
    let allPets = this.props.pets.map((thisPet) =>
      <Pet
      id = {thisPet.id}
      name = {thisPet.name}
      type = {thisPet.type}
      age = {thisPet.age}
      gender = {thisPet.gender}
      weight = {thisPet.weight}
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
