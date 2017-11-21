import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const renderPets = this.props.pets.map((pet) => {
      return <Pet pet={pet} isAdopted={this.props.adoptedPets.includes(pet.id)} onAdoptPet={this.props.onAdoptPet} />
    }
  )
    return (
      <div className="ui cards">
       {renderPets}
      </div>
    );
  }
}

export default PetBrowser;
