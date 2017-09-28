import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  render() {
debugger;
	var petElem = this.props.pets.map((pet) =>

		 <Pet pet={this.props.pet} isAdopted={this.props.adoptedPets.includes(pet.id) ? true : false} onAdoptPet={this.props.onAdoptPet} />
	)

    return (
      <div className="ui cards"> {petElem} </div>
    );
  }
}

export default PetBrowser;
