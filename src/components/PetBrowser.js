import React from 'react';

import Pet from './Pet';

export default class PetBrowser extends React.Component {

  render() {
    const { adoptedPets, onAdoptPet } = this.props
    const pets = this.props.pets.map((pet) => 
      <Pet pet={pet} isAdopted={adoptedPets.includes(pet.id)} onAdoptPet={onAdoptPet} key={pet.id}/>        
        )                                                                        
    return (
      <div className="ui cards">
        {pets}
      </div>
    )
  }
}