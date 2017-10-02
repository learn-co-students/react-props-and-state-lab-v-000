import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const petsArray = this.props.pets.map((petObj) => 
      <Pet pet={petObj}
        key={petObj.id}
        onAdoptPet={this.props.onAdoptPet}
        isAdopted={this.props.adoptedPets.includes(petObj.id)} />

    );
    return (
      <div className="ui cards">
        { petsArray }
      </div>
    );
  }
}

export default PetBrowser;
