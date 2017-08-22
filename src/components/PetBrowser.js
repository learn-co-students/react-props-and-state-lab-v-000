import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  constructor() {
    super();

    this.handleAdoptPet = this.handleAdoptPet.bind(this)
  }
  

  handleAdoptPet() {
    this.props.adoptedPets.push(this.props.pet.id)
  }

  render() {
    const pets = this.props.pets.map((pet) => <Pet pets={pet} isAdopted={this.props.adoptedPets.includes(pet.id) ? true : false } onAdoptPet={this.handleAdoptPet} />)

    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

export default PetBrowser;