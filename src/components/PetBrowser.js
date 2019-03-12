import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  // Using this prop, render the correct button in the pet's card;
  // if the pet is adopted, show the disabled button.
  // Otherwise, show the primary button to adopt the pet.
  

  render() {
    // array of pets that the component uses to render <Pet /> components
    // this.props.onAdoptPet => callback function adopted from App comp
    // pet's name, type, age and weight

    const petCards = this.props.pets.map(pet => (
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    ));

    return <div className="ui cards">{petCards}</div>;

  }
}

export default PetBrowser
