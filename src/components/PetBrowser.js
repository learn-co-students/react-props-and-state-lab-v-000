import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let petsArray = this.props.pets.map(pet => <Pet pet={pet} onAdoptPet={this.props.onAdoptPet}></Pet>)
    return (<div className="ui cards">
      {petsArray}
    </div>)
  }
}

export default PetBrowser
