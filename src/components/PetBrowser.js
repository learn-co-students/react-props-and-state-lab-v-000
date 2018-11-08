import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  renderPet = () => {
    let renderedPets = []
    for (let i = 0; i < this.props.pets.length; i++) {
      renderedPets.push(<Pet key={i.toString()} onAdoptPet={this.props.onAdoptPet} pet={this.props.pets[i]}/>)
    }
    return renderedPets
  }

  render() {
    return (
      <div className="ui cards">
        {this.renderPet()}
      </div>
    )
  }
}

export default PetBrowser
