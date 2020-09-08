import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const petInfoCards = this.props.pets.map(pet => (
      <Pet pet={pet} key={pet.id}  onAdoptPet={this.props.onAdoptPet}/>
    ))

    return <div className="ui cards">{petInfoCards} </div>
  }
}

export default PetBrowser
