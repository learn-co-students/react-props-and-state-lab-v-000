import React from 'react';
import Pet from './Pet';

class PetBrowser extends React.Component {

  petList() {
    return this.props.pets.map((pet) => {
      let adopted = this.props.adoptedPets.includes(pet.id)
      return <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={adopted}/>
    })
  }

  render() {
    let pet = {name: "tiki"}
    return (
      <div className="ui cards">
          {this.petList()}
      </div>
    );
  }
}

export default PetBrowser;
