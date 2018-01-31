import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  render() {
    const renderPetComponents = this.props.pets.map(pet => {
        const adopted = this.props.adoptedPets.includes(pet.id)
        return (
          <Pet pet={pet} isAdopted={adopted} onAdoptPet={this.props.onAdoptPet}/>
        )
      });

      return (
        <div className="ui cards">
          {renderPetComponents}
        </div>
      );
    }
  }

export default PetBrowser;
