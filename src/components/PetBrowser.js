import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const pets = this.props.pets;
    return (
      <div className="ui cards">
        {pets.map(pet => (<Pet
          pet={pet}
          onAdoptPet={this.props.onAdoptPet}
          isAdopted={this.props.adoptedPets.includes(pet.id)}
        />))};
      </div>
    );
  }
}

export default PetBrowser;
