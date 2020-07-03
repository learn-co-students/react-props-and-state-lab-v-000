import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  individualPetCards = () => {
    return this.props.pets.map(pet => (
      <Pet pet={pet} onAdoptPet={this.props.onAdoptPet}/>
    ))
  }

  

  render() {
    const petCards = this.props.pets.map(pet => (
      <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} />
    ));

    return <div className="ui cards">PET COMPONENT SHOULD GO HERE
      {petCards}
  
    
    </div>
  }
}

export default PetBrowser
