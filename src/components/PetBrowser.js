import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  insertPetComponents = () => {
    
    return this.props.pets.map(individualPet => {
      return (<Pet pet={individualPet} onAdoptPet={this.props.onAdoptPet} key={individualPet.id} />)
    })
  }
  render() {
    return <div className="ui cards">{this.insertPetComponents()}</div>
  }
}

export default PetBrowser
