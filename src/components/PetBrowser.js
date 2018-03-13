import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  render() {
    const pets = this.props.pets.map((pet, index) => {
      return <Pet pet={pet} key={index} isAdopted={this.props.adoptedPets.includes(pet.id)} 
      onAdoptPet={this.props.onAdoptPet} />
    })

    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

export default PetBrowser;

