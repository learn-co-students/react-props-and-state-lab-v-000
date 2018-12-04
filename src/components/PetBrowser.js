import React from 'react'
import Pet from './Pet'

const PetBrowser = props => {
  const petHTML = props.pets.map(pet => <Pet pet={pet} onAdoptPet={props.onAdoptPet} />)
  return <div className="ui cards">{petHTML}</div>
}

export default PetBrowser
