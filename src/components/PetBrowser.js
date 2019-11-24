import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let pets = this.props.pets;
    let petComponents = pets.map((pet, i) => {
      return <Pet key={i} onAdoptPet={this.props.onAdoptPet} pet={pet} />
    })
    return <div className="ui cards">{petComponents}</div>
  }
}

export default PetBrowser;
