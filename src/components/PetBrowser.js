import React from 'react'

import Pet from './Pet'

// Has a pets prop that it received from its parent App. access this via this.props.pets
// This is an array of pets that the component uses to render <Pet /> components and
// set a 'pet' prop for each pet component, which will later be used to render the pet component appropriately.

// Has an onAdoptPet prop from Parent App. This callback prop gets passed to its <Pet /> children


class PetBrowser extends React.Component {

  render() {

    const petCards = this.props.pets.map(pet => (
        <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
      ));
      
    return (
      <div className="ui cards">
        {petCards}
      </div>
    )
  }
}

export default PetBrowser
