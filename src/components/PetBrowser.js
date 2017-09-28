import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  render() {
	const petElem = this.props.pets.map(pet =>{
		<Pet pet={this.props.pet} isAdopted={this.props.adoptedPets} onAdoptPet={this.props.onAdoptPet} />
	})

    return (
      <div className="ui cards"> {petElem} </div>
    );
  }
}

export default PetBrowser;
