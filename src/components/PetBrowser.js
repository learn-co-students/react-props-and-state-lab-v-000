import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    // const pets = this.props.pets.map((pet, index) => {
    //   return <Pet pet={pet} key={index} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)} />
    // })
    return <div className="ui cards">{this.props.pets.map(pet => <Pet onAdoptPet={this.props.onAdoptPet} key={pet.id} pet={pet} />)}</div>
  }
}

export default PetBrowser
