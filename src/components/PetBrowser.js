import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAdopted(pet) {
    if (this.props.adoptedPets.includes(pet.id)) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const pets = this.props.pets.map((pet) =>
      <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.handleAdopted(pet)}/>
    )

    return(
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

export default PetBrowser;
