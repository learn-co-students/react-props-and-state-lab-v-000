import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    //pets and onAdoptPet props.
    //pets used to render Pet componenets
    //onAdoptPet is callback passed to Pet children componenets
    //isAdopted prop includes adoptedPets prop
    const pets = this.props.pets.map(pet =>
    <Pet
      pet={pet}
      key={pet.id}
      onAdoptPet={this.props.onAdoptPet}
      isAdopted={this.props.adoptedPets.includes(pet.id)}
      />)
    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

export default PetBrowser;
