import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  renderPets = () => this.props.pets.map((pet, idx) => <Pet pet={pet} key={idx} isAdopted={pet.isAdopted} onAdoptPet={this.props.onAdoptPet}/>)
  render() {
    return <div className="ui cards">{this.renderPets()}</div>
  }
}

export default PetBrowser
