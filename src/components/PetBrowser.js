import React from 'react';


import Pet from './Pet';

class PetBrowser extends React.Component {
  adoptionStatus = (petId) => {
    return this.props.adoptedPets.includes(petId) ? true : false
  }

  render() {
    let pets = this.props.pets.map(o => <Pet pet={o} isAdopted={this.adoptionStatus(o.id)} onAdoptPet={this.props.onAdoptPet}  />)

    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

export default PetBrowser;
