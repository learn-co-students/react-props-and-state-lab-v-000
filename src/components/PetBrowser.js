import React from 'react'
import Pet from './Pet'


class PetBrowser extends React.Component {
  render() {
    return  <div className="ui cards">PET COMPONENT SHOULD GO HERE...
              <Pet onAdoptPet={ this.onAdoptPet() }/>
            </div>
  }
}

export default PetBrowser
