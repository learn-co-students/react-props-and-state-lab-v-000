import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    const petHTML = this.props.pets.map(pet => <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} />) 

    return <div className="ui cards">{petHTML}</div>
  }
}

export default PetBrowser
