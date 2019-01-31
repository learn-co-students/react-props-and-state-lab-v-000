import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  handleAdoptClick = (event) => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {

    return( 
    	<div className="ui cards">
    		{this.props.pets.map((pet, index) => 
    			<Pet pet={pet} onAdoptPet={this.props.onAdoptPet} />)
	    	}
    	</div>
  	)
  }
}

export default PetBrowser
