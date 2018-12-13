import React from 'react'

import Pet from './Pet'

const PetBrowser = ({ pets, onAdoptPet} ) =>  {

// componentDidMount () {
//   console.log(this.props.pets)
// }

// componentWillMount () {
//   console.log(this.props.pets)
// }

// 
  const getPets = pets.map(pet => <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet}/>)

  
    return <div className="ui cards">{getPets}</div>
 
}

export default PetBrowser
