
import React from 'react';
import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const renderPets = this.props.pets.map(petProps =>
      <Pet
        pet = {petProps}
        key = {petProps.id}
        isAdopted = {this.props.adoptedPets.includes(petProps.id)}
        onAdoptPet = {this.props.onAdoptPet}
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
