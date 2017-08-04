import React from 'react';
import Pet from './Pet';

class PetBrowser extends React.Component {



  render() {
    const pets = this.props.pets.map( (pet, index) => (
    //  debugger
      <Pet key={index} pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)}/>
    ));
    //debugger

    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

export default PetBrowser;
