import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  adoptPet = () => {
	this.props.onAdoptPet().bind(this)
  }

  render(){
	var petsList = this.props.pets.map((pet, i) => { 
  		  return (
  		  	<Pet key={i} pet={pet} onAdoptPet={this.adoptPet.bind(this)} isAdopted={false}/>
  		  	)
  		  })

	var adoptedPetsList = this.props.adoptedPets.map((pet, i) => { 
  		  return (
  		  	<Pet key={i} pet={pet} onAdoptPet={this.adoptPet.bind(this)} isAdopted={true}/>
  		  	)
  		  })
  		
    return (
      <div className="ui cards">
        <h3>Pets</h3>
        {petsList}
        {adoptedPetsList}
      </div>
    );
  }
}

export default PetBrowser;