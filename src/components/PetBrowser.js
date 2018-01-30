import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  renderPets(){
    let pets = this.props.pets
    let adoptedPets = this.props.adoptedPets
    return pets.map(pet => {
      return <Pet
      key={pet.id}
      pet={pet}
      onAdoptPet={this.props.onAdoptPet}
      isAdopted={adoptedPets.includes(pet.id)} />
    })
  }
  render() {

    return (
      <div className="ui cards">
        {this.renderPets()}
      </div>
    );
  }
}

export default PetBrowser;
