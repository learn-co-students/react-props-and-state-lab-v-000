import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    // array of pets that the component uses to render <Pet /> components
    // this.props.onAdoptPet => callback function adopted from App comp
    console.log(this.props.pets)
    return <div className="ui cards">PET COMPONENT SHOULD GO HERE</div>
  }
}

export default PetBrowser
