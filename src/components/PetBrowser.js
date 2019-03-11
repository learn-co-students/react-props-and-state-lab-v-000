import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  // Using this prop, render the correct button in the pet's card;
  // if the pet is adopted, show the disabled button.
  // Otherwise, show the primary button to adopt the pet.
  getPet = () => {
    const pets = this.props.pets

    pets.forEach( (pet) => console.log(pet.name) )
  }

  render() {
    this.getPet()
    // array of pets that the component uses to render <Pet /> components
    // this.props.onAdoptPet => callback function adopted from App comp
    // pet's name, type, age and weight
    return <div className="ui cards"> <Pet pet={this.props.pet} isAdopted={this.isAdopted}/></div>
  }
}

export default PetBrowser
