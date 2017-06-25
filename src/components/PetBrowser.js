import React from 'react';
import PropTypes from 'prop-types';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const pets = this.props.pets.map((pet, index) => (
      <Pet pet={pet} key={index} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)} />
    ));

    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

PetBrowser.propTypes = {
  pets: PropTypes.array,
  onAdoptPet: PropTypes.func,
  adoptedPets: PropTypes.array,
}

export default PetBrowser;
