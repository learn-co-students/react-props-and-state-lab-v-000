import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {

    const petsDiv = this.props.pets.map(pet =>
        < Pet pet={pet}
          key={pet.id}
          onAdoptPet={this.props.onAdoptPet}
          isAdopted={this.props.adoptedPets.includes(pet.id)}
        />
      );

    return (
      <div className="ui cards">
        {petsDiv}
      </div>
    );
  }
}

export default PetBrowser;
