import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    return (
      <div className="ui cards">
        this.props.pet.map((pet, key) => <li> key={pet.id}>{pet.name}</li>)
        <Pet pet={this.props.pet} isAdopted={false} onAdoptPet={this.onAdoptPet}/>
      </div>
    )
  }
}

export default PetBrowser
