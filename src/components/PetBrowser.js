import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  onAdoptPet = (petId) => { this.props.onAdoptPet(petId) }

  genPets = () => {
    
    const pets = this.props.pets
    return pets.map(pet => <Pet key={pet.id} pet={pet} onAdoptPet={this.onAdoptPet} />)
  }

  render() {
    return (
    <div className="ui cards">
      {this.genPets()}
    </div>
    )
  }
}

export default PetBrowser
