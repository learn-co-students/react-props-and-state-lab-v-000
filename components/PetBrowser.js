import React from 'react';
import Pet from './Pet';

export default class PetBrowser extends React.Component {
  constructor() {
    super();


  }
  render() {
    const pets = this.props.pets.map((pet, i) => (
      <Pet pet={pet} key={i} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)} />
    ));

    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

