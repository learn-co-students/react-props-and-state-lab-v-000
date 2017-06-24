import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  render() {
    return (
      <div className="ui cards">
        { this.props.pets.map((myPet) =>
        	<Pet pet={myPet} isAdopted={this.props.adoptedPets.includes(myPet.id)} onAdoptPet={this.props.onAdoptPet}/>
        ) }
      </div>
    );
  }
}

export default PetBrowser;