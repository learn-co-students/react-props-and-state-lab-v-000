import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  // Function to create pets
  createPets = (props) => {
    const createdPets = this.props.pets.map((pet) => <Pet pet={pet} onAdoptPet={this.props.onAdoptPet}/>)
    return createdPets
  }


  render() {
    return <div className="ui cards">{this.createPets()}</div>
  }
}

export default PetBrowser
