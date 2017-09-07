import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const {adoptedPets} = this.props;
    const pets = this.props.pets.map((pet, i) => {
      return <Pet key={i}
                  pet={pet}
                  isAdopted={adoptedPets.includes(pet.id)}
                  onAdoptPet={this.props.onAdoptPet} />
    })
    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

export default PetBrowser;
