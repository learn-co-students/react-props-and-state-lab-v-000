import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const selection = this.props.pets.map(pet => (
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>
    ))

    return <div className="ui cards">{selection}</div>
  }
}

export default PetBrowser