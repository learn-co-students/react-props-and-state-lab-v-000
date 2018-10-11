import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  generatePetCards = () => {
    console.log("Pet Browser",this.props.pets);
  //   // map over your movieData array and return the correct 
     return this.props.pets.map ( (p) => 
       <Pet pet={p} />
     );
  }

  render() {
    return (
      <div>
        {this.generatePetCards()}
      </div>
    )
  }
}

export default PetBrowser
