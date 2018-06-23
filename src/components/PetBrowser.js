import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const {onAdoptPet} = this.props
    const {pets} = this.props
    const petInfo = pets.map(pet =>
      <Pet pet={pet} key={pet.id} onAdoptPet={onAdoptPet} />);
    return (
    <div className="ui cards">{petInfo}</div>
  )}
}

export default PetBrowser
