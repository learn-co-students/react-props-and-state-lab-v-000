import React, { Component } from "react";

import Pet from "./Pet";

export default class PetBrowser extends Component {
  render() {
    const pets = this.props.pets.map((pet, index) => {
      return;
      <Pet
        pet={pet}
        key={index}
        onAdoptPet={this.props.onAdoptPet}
        isAdopted={this.props.adoptedPets.includes(pet.id)}
      />;
    });
    // const PetBrowser = ({ pets, onAdoptPet }) => {
    //   const petCards = pets.map(pet => (
    //     <Pet pet={pet} key={pet.id} onAdoptPet={onAdoptPet} />
    //   ));

    return <div className="ui cards">{pets}</div>;
  }
}
