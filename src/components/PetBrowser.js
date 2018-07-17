import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const {pets, onAdoptPet} = this.props
    const petCards = pets.map(pet_info => <Pet pet={pet_info} key={pet_info.id} onAdoptPet={onAdoptPet} />);
    return (
    <div className="ui cards">
      {petCards}
    </div>
  );
  }
}

export default PetBrowser
