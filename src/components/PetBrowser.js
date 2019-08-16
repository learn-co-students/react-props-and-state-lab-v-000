import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {

    const selectedPets = this.props.pets.map( pet => (
          // how is pets able to be passed down as a prop when it wasn't defined specifically in App?
          // return value is pets array of objects

      <Pet eachPet={ pet } key={ pet.id } onAdoptPet={ this.props.onAdoptPet }/>
      // Why did we need to have the key? 
    )) 
  
   
    return ( 
      <div className="ui cards">
        { selectedPets }
      </div>
    )
  }
}

export default PetBrowser

// this is just a presentational component
