import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  render() {
    const pets = this.props.pets.map((pet, index) => {
        return <Pet pet={pet} key={index} onAdoptedPet={this.props.onAdoptedPet}
          isAdopted={this.props.adoptedPets.includes(pet.id)}/>
      })
  
    

    return <div className="ui cards">
    {pets}
    PET COMPONENT SHOULD GO HERE
    </div>
  }
}

export default PetBrowser
