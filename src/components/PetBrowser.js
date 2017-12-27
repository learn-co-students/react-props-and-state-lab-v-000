import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  checkAdopted = function (petId) {
    return this.props.adoptedPets.includes(petId)
  }.bind(this);

  render() {

    return (
      <div className="ui cards">
        <ul>
          {this.props.pets.map(function(pet) {
          return (
            <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.checkAdopted(pet.id)}/>
          );
        }.bind(this))}
        </ul>

      </div>
    );
  }
}

export default PetBrowser;
