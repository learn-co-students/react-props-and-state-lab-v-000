import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  adoptPet = (id) => {
	this.props.onAdoptPet(id)
  }

  render(){
	var petsList = this.props.pets.map((pet, i) => {
  		  return (
  		  	<Pet key={i} pet={pet} onAdoptPet={this.adoptPet.bind(this)} isAdopted={this.props.adoptedPets.includes(pet.id)}/>
  		  	)
  		  }, this)

    return (
      <div className="ui cards">
        <h3>Pets</h3>
        {petsList}
      </div>
    );
  }
}

export default PetBrowser;