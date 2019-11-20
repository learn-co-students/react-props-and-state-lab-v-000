import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  makePets = () => {
    let newPets = this.props.pets.map((myPet, idx) => <Pet pet={myPet} onAdoptPet={this.props.onAdoptPet} key={idx}/>)
    return newPets
  }

  logToConsole = (text) => {

    console.log("called" + text.name)
  }

  render() {
    return (
      <div className="ui cards">
        {this.makePets()}
      </div>

    )
  }
}

export default PetBrowser
