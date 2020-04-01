import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

 createCard = pets => {
   return pets.map(pet => <Pet adopter = {this.props.onAdoptPet} key = {pet.id} petInfo = {pet}/>)
 }

  render() {
    
    return <div className="ui cards">
      {this.createCard(this.props.pets)}
      </div>
  }
}

export default PetBrowser
