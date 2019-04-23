import React from 'react'

import Pet from './Pet'

export default class PetBrowser extends React.Component {
  // this render may appear to be the simplest feature to build, but it reinforces the understanding of compartmentalizing elements of the program. 
  // Our function we built #onAdoptPet gets reused multiple times throughout the program ultimately being utilized by the './Pet' and './App' 
  render() {
    let petComponent = this.props.pets.map(pet => (
      <Pet
        pet={pet}
        key={pet.id}
        onAdoptPet={this.props.onAdoptPet}
      />
    ))
    return <div className="ui cards">{petComponent}</div>
  }
}
