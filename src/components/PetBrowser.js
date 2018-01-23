import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const showPets = this.props.pets.map(individualPet =>
    <Pet
      pet={individualPet}
      key={individualPet.id}
      onAdoptPet={this.props.onAdoptPet}
      isAdopted={this.props.adoptedPets.includes(individualPet.id)}
    />
  )
    return (
      <div className="ui cards">
        {showPets}
      </div>
    );
  }
}

export default PetBrowser;
