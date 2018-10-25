import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
//  constructor(props) {
//    super(props)

//    this.state = {
//      pets: [],
//      filters: {
//        type: 'all'
//      }
//    }
//  }
  
  //handleAdoptPet = (event) => {
//	  this.props.onAdoptPet(event)
//  }

  render() {
    const pets = this.props.pets.map( (pet, index) => {
	    return <Pet pet =  {pet} key = {index} onAdoptPet = {this.props.onAdoptPet} isAdopted = {this.props.adoptedPets.includes(pet.id)} />
	})
    return (
	    <div className="ui cards">
	    	{pets}
	   </div>
    )
  }
}

export default PetBrowser
