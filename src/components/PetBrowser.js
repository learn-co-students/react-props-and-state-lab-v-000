import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  constructor() {
    super();
    
    this.onAdoptPet = this.onAdoptPet.bind(this);
    this.isAdopted = this.isAdopted.bind(this);
  }
  
  onAdoptPet() {
    this.props.onAdoptPet();
  }
  
  isAdopted() {
    this.props.isAdopted();
  }
  
  render() {
    const pets = this.props.pets.map((pet,index) => (
      <Pet pet={pet} key={index} isAdopted={this.props.adoptedPets.includes(pet.id)} onAdoptPet={this.props.onAdoptPet} />
    ))
  
    return (
      <div className="ui cards">
        <code>
          {pets}
        </code>
      </div>
    );
  }
}

export default PetBrowser;