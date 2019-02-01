import React from 'react'
import shortid from 'shortid'
import Pet from './Pet'

class PetBrowser extends React.Component {

  handlePets = () => {
    return this.props.pets.map(petInfo => {
      return <Pet key={shortid.generate()} onAdoptPet={this.props.onAdoptPet} pet={petInfo} isAdopted={petInfo.isAdopted} />
    })
  }
  render() {
    return <div className="ui cards">{this.handlePets()}</div>
  }
}

export default PetBrowser
