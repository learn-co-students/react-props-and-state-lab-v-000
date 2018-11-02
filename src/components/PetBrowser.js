import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  onAdoptPet = (petID) => {
    this.props.onAdoptPet(petID);
  }

  renderPet = () => {
    this.props.pets.map(
      eachPet => <Pet onAdoptPet={this.onAdoptPet} pet={this.eachPet}/>
    )
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
