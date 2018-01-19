import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  constructor(){
    super();
  }

  render() {
    const childPetElements = this.props.pets ? this.props.pets.map(pet => {
        return (
          <Pet 
            pet = {pet}
            onAdoptPet = {this.props.onAdoptPet}
            isAdopted = {this.props.adoptedPets.includes(pet.id)} 
          />
        )
    }) : null

    return (
      <div className="ui cards">
        {childPetElements}
      </div>
    );
  }
}

export default PetBrowser;
