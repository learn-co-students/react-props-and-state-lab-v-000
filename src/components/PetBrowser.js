import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    // return this.props.pets.map ( (pet) => {

    //   return <div className="ui cards" key={pet.id}><Pet pet={pet} onAdoptPet={this.props.onAdoptPet}/></div>
    // })

    const pets = this.props.pets.map( (pet) => {
      return <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet}/>
    })

    return <div className="ui cards">{pets}</div>
  }
}

export default PetBrowser
