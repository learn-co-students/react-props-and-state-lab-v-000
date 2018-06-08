import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const pets = this.props.pets.map( (pet, index) => {
      let adopted = this.props.adoptedPets.includes(pet.id);
     return <Pet pet={pet} key={index} onAdoptPet={this.props.onAdoptPet} isAdopted={adopted}/>
    })

    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

export default PetBrowser;
