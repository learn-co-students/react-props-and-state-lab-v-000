import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    const pets = this.props.pets.map((pet, index) => {
        return <Pet pet={pet} key={index} onAdoptedPet={this.props.onAdoptedPet}/>
      })
  
    

    return <div className="ui cards">
    {pets}
    PET COMPONENT SHOULD GO HERE
    </div>
  }
}

export default PetBrowser
