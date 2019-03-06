import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  //
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     pets: this.props.pets
  //   }
  // }
  genPets = () => {
    return this.props.pets.map((pet, idx) => <Pet key={idx} pet={pet} onAdoptPet={this.props.onAdoptPet}/>)
  }

  render() {
    console.log(this.genPets())

    return (
      <div className="ui cards">{this.genPets()}</div>
    )
  }
}

export default PetBrowser
