import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
  	debugger
    const renderPets = this.props.pets.map(pet =>
      <Pet 
        pet={pet}
        onAdoptPet={this.props.onAdoptPet} // passes <PetBrowser /> this.props.onAdoptPet to <Pet /> this.props.onAdoptPet
        																	 // which is a function that adds the pet.id to this.state.adoptedPets in <App />
        isAdopted={this.props.adoptedPets.includes(pet.id)} //returns true or false depending if the pets id is found
      />
    )
    
    return (
      <div className="ui cards">
        {renderPets} 
      </div>
    );
  }
}

export default PetBrowser;
