import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const petsProp = this.props.pets.map((p) =>
      <Pet
      pet={p}
      key={p.id}
      onAdoptPet={this.props.onAdoptPet}
      isAdopted={this.props.adoptedPets.includes(p.id)}
      />
    );
    return (
      <div className="ui cards">
        {petsProp}
      </div>
    );
  }
}

export default PetBrowser;
