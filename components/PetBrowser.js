import React from 'react';
import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
  	var pets = this.props.pets.map((pet, index) =>{
    	return (<Pet pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)} key={index}/>)
    });
    	
    return (
      <div className="ui cards">
  		{pets}
      </div> 
    );
  }
}

module.exports = PetBrowser;
