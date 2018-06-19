import React from 'react';
import PropTypes from 'prop-types';

import Pet from './Pet';

class PetBrowser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pets = this.props.pets.map(pet =>
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)}/>
    )

    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

export default PetBrowser;

PetBrowser.propTypes = {
  pets: PropTypes.array,
  adoptedPets: PropTypes.array,
  onAdoptPet: PropTypes.func
}
