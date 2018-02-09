import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  render() {
    const petComps = this.props.pets.map(pet => {
      return <li key={pet.id}><Pet
        key={pet.id}
        pet={pet}
        onAdoptPet={ this.props.onAdoptPet }
        isAdopted={ this.props.adoptedPets.includes(pet.id) }
      /></li>
    })

    return (
      <div className="ui cards">
        <ul>
          {petComps}
        </ul>
      </div>
    );
  }
}

export default PetBrowser;
