import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  render() {
    const petItems = this.props.pets.map(pet => <Pet pet={pet} key={pet.id} isAdopted={pet.isAdopted} onAdoptPet={this.props.onAdoptPet} />);
    return (
      <div className="ui cards">{petItems}</div>
    )
  }
}

export default PetBrowser
