import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  petComponents = (pets) => {
		return pets.map(petObj => <Pet pet={petObj} isAdopted={this.checkAdoptionStatus(petObj.id)} onAdoptPet={this.props.onAdoptPet}  />)
	}

	checkAdoptionStatus = (petId) => {
		return this.props.adoptedPets.includes(petId) ? true : false
	}

  render() {
    return (
      <div className="ui cards">
        {this.petComponents(this.props.pets)}
      </div>
    );
  }
}

export default PetBrowser;
