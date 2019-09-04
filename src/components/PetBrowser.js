import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">
    <Pet pet={this.props.pets[0]} onAdoptPet={this.props.onAdoptPet}/>
    </div>
  }
}

export default PetBrowser
