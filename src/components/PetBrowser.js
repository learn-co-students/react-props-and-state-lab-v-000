import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    return (
      <div
        className="ui cards">

        {/*PET COMPONENT SHOULD GO HERE*/}
         {this.props.pets.map( aPet => <Pet onAdoptPet={this.props.onAdoptPet} pet={aPet} />) }
      </div>
    )
  }
}

export default PetBrowser
