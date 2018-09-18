import React from 'react'

import Pet from './Pet'

export default class PetBrowser extends React.Component {

  petCards = () => (
    this.props.pets.map(pet => (
      <Pet pet={pet}
           key={pet.id}
           onAdoptPet={this.props.onAdoptPet} />
    ))
  )

  render() {
    return (
      <div className="ui cards">{this.petCards()}</div>
    );
  }
}
