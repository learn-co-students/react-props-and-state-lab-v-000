import React from 'react';
import Pet from './Pet';

class PetBrowser extends React.Component {

  //create a bunch of Pet objects based on the this.props.pets prop
    //this.props.pets > [{name: ''}, {}]
    // [<Pet props... />, <Pet props... />]
  render() {
    var renderPets = this.props.pets.map((pet) => (
      <Pet pet={pet}
        onAdoptPet={this.props.onAdoptPet}
        isAdopted={this.props.adoptedPets.includes(pet.id)}
      />
    ));

    return (
      <div className="ui cards">
        {renderPets}
      </div>
    );
  }
}

export default PetBrowser;
