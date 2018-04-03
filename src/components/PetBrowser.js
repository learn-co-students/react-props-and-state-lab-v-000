import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  renderPet = () => {
    let pets = [];

    this.props.pets.forEach((pet, i) => {
      pets.push(<Pet pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={(this.props.adoptedPets.includes(pet.id))}/>)
    });

    return pets
  };

  render() {
    return (
      <div className="ui cards">
        { this.renderPet() }
      </div>
    );
  }
}

export default PetBrowser;
