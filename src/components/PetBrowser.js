import React from 'react'

import Pet from './Pet'

// Has a pets prop that it received from its parent App. access this via this.props.pets
// This is an array of pets that the component uses to render <Pet /> components and
// set a 'pet' prop for each pet component, which will later be used to render the pet component appropriately.

// Has an onAdoptPet prop from Parent App. This callback prop gets passed to its <Pet /> children

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map((pet, i) => <Pet key={i} pet={pet} isAdopted={pet.isAdopted} onAdoptPet={this.props.onAdoptPet}/>)}
      </div>
    )
  }
}

export default PetBrowser
