import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const allPets = [];
    for (const pet of this.props.pets) {
      let newPet = <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />;
      allPets.push(newPet);
    }
    return <div className="ui cards">{allPets}</div>
  }
}

export default PetBrowser
