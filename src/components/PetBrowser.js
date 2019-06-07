import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const petCards = this.props.pets.map(pet => {
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>
    })
    return <div className="ui cards">{console.log(petCards)}<h1>Pet cards where are you?</h1></div>
  }
}

export default PetBrowser
