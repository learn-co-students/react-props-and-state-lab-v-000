import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const pets = this.props.pets
    
    return (
      <div className="ui cards">
        {pets.map(pet => 
          <Pet key={pet.name} isAdopted={this.props.adoptedPets.includes(pet.id)} onAdoptPet={this.props.onAdoptPet} pet={pet} />)}
      </div>
    );
  }
}

export default PetBrowser;
