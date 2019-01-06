import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  generatePetCards = () => {
    return this.props.pets.map((pet) =>
      <Pet pet={pet} key={pet.id}  adoptStatus={pet.isAdopted} onAdoptPet={this.props.onAdoptPet}/>
      // <Pet key={pet.id} type={pet.type} gender={pet.gender} age={pet.age} weight={pet.weight} name={pet.name} adoptStatus={pet.isAdopted} onAdoptPet={this.props.onAdoptPet}/>
    )
  }

  render() {
    return <div className="ui cards">
      {this.generatePetCards()}
    </div>
  }
}

export default PetBrowser
