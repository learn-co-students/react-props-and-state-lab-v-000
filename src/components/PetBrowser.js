import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  generatePetCards = () => {
    return this.props.pets.map((obj) => <Pet pet={obj}/>)
  }
  render() {
    return <div className="ui cards">{this.generatePetCards()}</div>
  }
}

export default PetBrowser
