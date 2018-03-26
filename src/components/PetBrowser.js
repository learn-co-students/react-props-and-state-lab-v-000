import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const showPets = this.props.pets.map(pet =>
      <Pet
      pet={pet}
      id={pet.id}
      onAdoptPet={this.props.onAdoptPet}
      isAdopted={this.props.adoptedPets.includes(pet.id)}
      />
    )
    return (
      <div className="ui cards">
      {showPets}
      </div>
    );
  }
}

export default PetBrowser;
