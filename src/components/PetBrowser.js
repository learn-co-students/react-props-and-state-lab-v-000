import React from 'react';

import Pet from './Pet';
//container component
class PetBrowser extends React.Component {

  generatePetCards = () => {
      return this.props.pets.map(pet => <Pet key={pet.id} name={pet.name} gender={pet.gender} age={pet.age} weight={pet.weight} type={pet.type} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)} />)
  }

  render() {
    return (
      <div className="ui cards">
        {this.generatePetCards()}
      </div>
    );
  }
}

export default PetBrowser;
