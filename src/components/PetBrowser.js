import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const petsArray = this.props.pets
    return (
      <div className="ui cards">
        {petsArray.map(eachPet => (<Pet pet={eachPet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(eachPet.id)}/>))}
      </div>
    );
  }
}

export default PetBrowser;
