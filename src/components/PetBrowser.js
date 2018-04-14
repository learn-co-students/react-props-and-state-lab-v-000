import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const pets = this.props.pets.map(pet => {
      const isAdopted = {
        isAdopted: this.props.adoptedPets.includes(pet.id)
      }
      return <Pet key={pet.id} pet={pet} {...isAdopted} onAdoptPet={this.props.onAdoptPet} />
    })

    return (
      <div className="ui cards">
        <div>
          {pets}
        </div>
      </div>
    );
  }
}

export default PetBrowser;
