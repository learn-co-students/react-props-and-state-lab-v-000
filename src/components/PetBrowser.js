import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
  const onAdoptPet = this.props.onAdoptPet
  const petChildren = this.props.pets.map(pet => <Pet
    pet={pet}
    key={pet.id}
    onAdoptPet={onAdoptPet}
    isAdopted={this.props.adoptedPets.includes(pet.id)}/>)
    return (
      <div className="ui cards">
        {petChildren}
      </div>
    );
  }
}

export default PetBrowser;
