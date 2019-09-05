
import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    console.log(this.props.pets[0])
    const petCards = this.props.pets.map(pet => (
      <Pet pet={pet} onAdoptPet={this.props.onAdoptPet}/>
    ))
    return <div className="ui cards">
      {petCards}
    </div>
  }
}

export default PetBrowser
