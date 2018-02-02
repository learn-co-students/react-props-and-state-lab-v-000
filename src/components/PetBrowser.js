import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  render() {
    const renderPets = this.props.pets.map(pet =>
      {
        const adopted = this.props.adoptedPets.some(id => id === pet.id);
        return <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={adopted} />
      })

    return (
      <div className="ui cards">
        {renderPets}
      </div>
    );
  }
}

export default PetBrowser;
