import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {

renderPet = () => {
  return this.props.pets.map((pet) => {
    return <Pet onAdoptPet={this.props.onAdoptPet} pet={pet}/>
  })
}

  render() {
    return <div className="ui cards"> {this.renderPet()} </div>
  }
}

export default PetBrowser
