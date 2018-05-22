import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const adoptedPets = this.props.adoptedPets
    const onAdoptPet = this.props.onAdoptPet
    return (
      <div className="ui cards">
        {this.props.pets.map(pet => {
          return <Pet pet={pet} isAdopted={adoptedPets.includes(pet.id)} onAdoptPet={onAdoptPet} />
        })}
      </div>
    );
  }
}

export default PetBrowser;
