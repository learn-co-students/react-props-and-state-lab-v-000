import React from 'react';
import PropTypes from 'prop-types';

import Pet from './Pet';

class PetBrowser extends React.Component {
  constructor() {
    super();
  };

  render() {
    const renderPets = this.props.pets.map(pet =>
      <Pet
        pet={pet}
        key={pet.id}
        onAdoptPet={this.props.onAdoptPet}
        isAdopted={this.props.adoptedPets.includes(pet.id)}
      />)
    return (
      <div className="ui cards">
        <code>&lt;Pet /&gt;</code> &nbsp; components should go here
        {renderPets}
      </div>
    );
  }
}

export default PetBrowser;
