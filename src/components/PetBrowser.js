import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {

    var petArray = this.props.pets;

    var listedPets = petArray.map((pet) => (
      <Pet key={pet.id.toString()}
        pet={pet}
        isAdopted={this.props.adoptedPets.includes(pet.id)}
        onAdoptPet={this.props.onAdoptPet}
        />
    ));

    return (
      <div className="ui cards">
        {listedPets} stuff
      </div>
    );
  }
}

export default PetBrowser;
