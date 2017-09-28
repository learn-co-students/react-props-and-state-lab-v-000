import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  render() {
    //const childElem = React.Children.map(this.props.children, child => {

			//	if(this.props.adoptedPets === child){
				//	return React.cloneElement(child, {
			  //  isAdopted: true})
			//	} else {
				//	return React.cloneElement(child, {
			   // isAdopted: ''})
	    // }});

	const petElem = this.props.pets.map(pet =>{
<Pet
	pet={this.props.pet}
onAdoptPet={this.props.onAdoptPet}
/>})

    return (
      <div className="ui cards"> {petElem}
			</div>
    );
  }
}

export default PetBrowser;
