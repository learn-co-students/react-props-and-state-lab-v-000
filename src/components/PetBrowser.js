import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    const pets = this.props.pets.map ((pet) => {
      return <Pet pet = {pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)}/>
    })
    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

export default PetBrowser;
