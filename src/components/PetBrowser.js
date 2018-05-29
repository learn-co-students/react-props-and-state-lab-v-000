import React from 'react';

import Pet from './Pet';

const lucy = {
    name: "Lucy",
    type: "dog",
    age: 8,
    gender: "female",
    weight: "50 lbs"
  }


class PetBrowser extends React.Component {

  render() {
    const renderPets = this.props.pets.map(pet =>
      <Pet
        pet={pet}
        key={pet.id}
        isAdopted={this.props.adoptedPets.includes(pet.id)}
        onAdoptPet={this.props.onAdoptPet}
      />
    )

    return (
      <div className="ui cards">
        {renderPets}
      </div>
    );
  }
}

export default PetBrowser;
