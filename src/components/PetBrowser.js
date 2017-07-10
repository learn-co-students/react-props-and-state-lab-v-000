import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  isAdopted = (pet) => {
    return this.props.adoptedPets.includes(pet.id)
  }

  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map((pet) => {
          return (
            <div key={pet.id}>
              <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.isAdopted(pet)} />
            </div>
          )
        }
      )}
      </div>
    );
  }
}

export default PetBrowser;
