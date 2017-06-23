import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    var upAdoptedPets = this.props.pets.map((animal)=>{
      return (<Pet pet={animal}
        isAdopted={this.props.adoptedPets.includes(animal.id)}
        onAdoptPet={this.props.onAdoptPet} />)
    })
    return (
      <div className="ui cards">
        {upAdoptedPets}
      </div>
    );
  }
}

export default PetBrowser;
