import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const petComponents = this.props.pets.map(pet => {
      return <div><Pet onAdoptPet={this.onAdoptPet} isAdopted={pet.isAdopted} id={pet.id} name={pet.name} type={pet.type} gender={pet.gender} age={pet.age} weight={pet.weight} /></div>
    })
    return (
      <div className="ui cards">
        {petComponents}
      </div>
    );
  }
}

export default PetBrowser;
