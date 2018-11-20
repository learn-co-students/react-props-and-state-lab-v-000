import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  listPets = () => {
    let petList = []
    for(let i of this.props.pets) {
      petList.push(<Pet key={i.toString()} onAdoptPet={this.props.onAdoptPet} pet={this.props.pets[i]} />)
    }
    return petList
  }

  render() {
    return <div className="ui cards">{this.listPets()}</div>
  }
}

export default PetBrowser
