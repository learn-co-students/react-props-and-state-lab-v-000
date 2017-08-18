import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map((animal, index) => (
          <Pet pet={animal} key={index} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(animal.id)} />
        ))}
      </div>
    );
  }
}

export default PetBrowser;