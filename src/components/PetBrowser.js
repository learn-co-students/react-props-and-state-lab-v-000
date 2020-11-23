import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const thesePets = this.props.pets.map(pet => (
      <Pet 
        pet={pet}
        key={pet.id}
        // update the adopted pet's adoption status
        onAdoptPet={this.props.onAdoptPet}
        />
        
        ))


    return <div className="ui cards">{thesePets}</div>
  }
}

export default PetBrowser
