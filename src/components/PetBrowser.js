import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const pets = this.props.pets;
    const adoptedPets = this.props.adoptedPets;
    return (
      <div className="ui cards">
        {pets.map((pet, index) => {
          return <Pet pet={pet} key={index} onAdoptPet={this.props.onAdoptPet} isAdopted={adoptedPets.includes(pet.id)} />
        })}
      </div>
    );
  }
}

export default PetBrowser;
