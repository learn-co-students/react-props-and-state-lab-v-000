import React from 'react'
import Pet from './Pet'


class PetBrowser extends React.Component {

  createPets = () => this.props.pets.map(p => <Pet pet={p} key={p.id} onAdoptPet={this.props.onAdoptPet}/>)

  render() {
    return <div className="ui cards">{this.createPets()}</div>
  }
}

export default PetBrowser
