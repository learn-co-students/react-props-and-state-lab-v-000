import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
  	console.log('from petBrowser', this.props.pets)
  	console.log(`from petBrowser, what is pet`, this.props.pets[0])
    
    let pets = this.props.pets.map(pet => { 
    	return <div className="ui cards" key={pet.id} ><Pet onAdoptPet={this.props.onAdoptPet} id={pet.id} gender={pet.gender} age={pet.age} weight={pet.weight} isAdopted={pet.isAdopted} name={pet.name} type={pet.type} /></div>
    }) 
   
    return (
    	<li>{pets}</li>
    )
  }
} 

export default PetBrowser
