import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  isAdopted =(pet)=>{
    if(this.props.adoptedPets){
    return this.props.adoptedPets.includes(pet.id)
  }
}

  displayPets = ()=>{
    return this.props.pets.map(pet=>{

      return <div key={pet.id}><Pet pet= {pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.isAdopted(pet)} />
      </div>

    })
  }







  render() {
    return <div className="ui cards">PET COMPONENT SHOULD GO HERE
      {console.log(this.props.pets)}
    <br />  {this.displayPets()}
    </div>
  }
}

export default PetBrowser
