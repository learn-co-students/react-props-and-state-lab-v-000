import React from 'react';

import Pet from './Pet';

export default class PetBrowser extends React.Component {



  render() {
    const pets = this.props.pets.map((pet) => 
          <Pet pet={pet} isAdopted={this.props.adoptedPets.includes(pet.id)} onAdoptPet={this.props.onAdoptPet} key={pet.id}/>        
        )                                                                        
    return (
      <div className="ui cards">
        {pets}
      </div>
    )
  }
}