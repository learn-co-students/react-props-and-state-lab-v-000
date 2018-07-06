import React from 'react'

import Pet from './Pet'



class PetBrowser extends React.Component {

  render() {
    const renderPets = this.props.pets.map(function(pet){
      return(
      <Pet
        name={pet.name}
        type={pet.type}
        age={pet.age}
        weight={pet.weight}
        gender={pet.gender}
        isAdopted={pet.isAdopted}
      />)
    })
    console.log(this.props.pets)
    return <div className="ui cards">{renderPets}</div>
  }
}

export default PetBrowser
