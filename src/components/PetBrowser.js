import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  constructor(props) {
    super(props);
  }

  pets = this.props.pets.map((pet) => {
    return(
      <Pet
        pet={pet}
        onAdoptPet={this.props.onAdoptPet}
        isAdopted={this.props.adoptedPets.includes(pet.id)}/>
    )
  })

  render() {
    return (
      <div className="ui cards">
        {this.pets}
      </div>
    );
  }
}

export default PetBrowser;
