import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  listPets = () => {
      return this.props.pets.map((value, index) =>
      <Pet
      pet = {value}
      key = {index}
      onAdoptPet={this.props.onAdoptPet}/>
    )}

  render() {
    return (
      <div className="ui cards">
        {this.listPets()}
      </div>
    )
  }
}

export default PetBrowser
