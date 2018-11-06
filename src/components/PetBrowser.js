import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    const petsComponents = this.props.pets.map((pet, index)=>{
      return (<Pet key={index} pet={pet} onAdoptPet={this.props.onAdoptPet}/>)
    })
    return <div className="ui cards">{petsComponents}</div>

  }
}

export default PetBrowser
