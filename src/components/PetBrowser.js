import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    let pets = this.props.pets
    let PETS = [];
    for (let i = 0; i < pets.length; i++) {
      PETS.push(<Pet pet={pets[i]} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pets[i].id)}/>)
    }
    return (
      <div className="ui cards">
        Pets: {PETS}
      </div>
    );
  }
}

export default PetBrowser;
