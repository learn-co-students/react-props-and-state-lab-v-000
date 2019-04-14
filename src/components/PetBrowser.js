import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const petSelect = this.props.pets.map(pet => (
    <Pet pet={this.props.pet} onAdoptPet={this.props.onAdoptPet}/>
    ))
    return <div className="ui cards"> {petSelect}></div>
  }
}

export default PetBrowser