import React from 'react';
import PropTypes from 'prop-types';

import Pet from './Pet';

class PetBrowser extends React.Component {
  isAdopted(id) {
    return this.props.adoptedPets.includes(id);
  }

  render() {
    const renderPets = this.props.pets.map((pet, index) =>
      <Pet
        key={index}
        pet={pet}
        onAdoptPet={this.props.onAdoptPet}
        isAdopted={this.isAdopted(pet.id)}
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
