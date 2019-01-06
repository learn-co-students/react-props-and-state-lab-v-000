import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {



  render() {
    return <div className="ui cards">
    this.props.pets.forEach(specificPet =>
      <Pet pet={specificPet} />
    </div>
    // {this.props.pets}.forEach(pet => pet)
  }
}

export default PetBrowser
