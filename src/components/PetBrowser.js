import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  render() {
    const adoptedPets = this.props.adoptedPets;
    const onAdoptPet = this.props.onAdoptPet;
    const pets = this.props.pets;
    return (
      <div className="ui cards">
      {pets.map(pet => {
        return(
          <Pet pet={pet} isAdopted={adoptedPets.includes(pet.id)}  onAdoptPet={onAdoptPet}/>
        )
      })}
      </div>
    );
  }
}

export default PetBrowser;
