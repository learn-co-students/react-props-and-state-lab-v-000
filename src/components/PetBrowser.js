import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  // Components received: 
    // this.props.pets ==> list of pets
    // this.props.onAdopt ==> passed to each <Pet /> component
  

  render() {
    const petCards = this.props.pets.map(pet => {
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    })
    return <div className="ui cards">{petCards}</div>
  }
}

export default PetBrowser
