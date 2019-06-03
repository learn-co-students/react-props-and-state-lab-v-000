import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    let pets = []
    for (let i=0; i < this.props.pets.length; i++) {
      pets.push(<Pet key={i} pet={this.props.pets[i]} onAdoptPet={this.props.onAdoptPet}/>)
    }
    return (
      <div className="ui cards">
        {pets}
      </div>
    )
  }
}

export default PetBrowser
