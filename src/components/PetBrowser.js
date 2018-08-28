import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component { 
  render() {
    console.log(this.props)
    console.log(this.props.adoptedPets)
    console.log(this.props.adoptedPets.includes(1))

    let petProps = this.props.pets.map(pet => 
     <Pet pet={pet} key={pet.id} 
      onAdoptPet={this.props.onAdoptPet} 
      isAdopted={this.props.adoptedPets.includes(pet.id)} 
      />
    )
     

    return(
      <div className="ui cards">
        {petProps}
      </div>
    )
  }
}

export default PetBrowser
