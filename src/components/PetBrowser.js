import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const petStuff= this.props.pets.map(petObject => <Pet pet={petObject} key={petObject.id} isAdopted={petObject.isAdopted} onAdoptPet={this.props.onAdoptPet}/>)
    
    return (
      <div className="ui cards"> {petStuff} </div>
     )}
  }

export default PetBrowser
