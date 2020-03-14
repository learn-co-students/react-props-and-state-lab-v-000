import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {

    const petArray = this.props.pets.map(card => <Pet pet={card} onAdoptPet={this.props.onAdoptPet} key={card.id}/>)
    return <div className="ui cards">{petArray}</div>




  }
}

export default PetBrowser
