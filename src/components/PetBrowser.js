import React from 'react';
import Pet from './Pet';

class PetBrowser extends React.Component {

  render() {

    const adoptFn = this.props.onAdoptPet;
    const adoptStatus = (id) => this.props.adoptedPets.includes(id);

    const petComps = this.props.pets.map(pet => {
      return <li key={pet.id}><Pet
        key={pet.id}
        pet={pet}
        onAdoptPet={ adoptFn }
        isAdopted={ adoptStatus(pet.id) }
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
