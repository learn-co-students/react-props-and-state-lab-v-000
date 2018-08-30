import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  constructor(props) {
    super(props)
  }

  cards = () => {
    return this.props.pets.map(pet => <Pet pet={pet} key={pet.id} />)
  }


  render() {
    return <div className="ui cards">{this.cards()}</div>
  }
}

export default PetBrowser
