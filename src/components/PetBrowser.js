import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  render() {
   
    return <div className="ui cards">
    {this.props.pets.length !== 0 ? this.props.pets.map((pet) =>
    <Pet
    petType={pet.type}
    petName={pet.name}
    petId={pet.id}
    petAge={pet.age}
    petWeight={pet.weight}
    petProps={this.props.pets}
    onAdoptPet={this.props.onAdoptPet}
  /> 
    ) : null}
    </div>
  }
}

export default PetBrowser
