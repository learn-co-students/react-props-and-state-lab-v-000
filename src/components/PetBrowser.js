import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  
  render() {
    // This is an array of pets that the component uses to render <Pet /> components.
    const pets = this.props.pets.map((pet, index) => {
      
      return (
        <Pet 
        pet={pet}
        key={index} // Need unique identifier
        onAdoptPet={this.props.onAdoptPet}
        isAdopted={this.props.adoptedPets.includes(pet.id)}
        />
      );
      
    }) // end pets
    
    return (
      <div className="ui cards">
        {pets}
      </div>
      )
  }
}

export default PetBrowser;
