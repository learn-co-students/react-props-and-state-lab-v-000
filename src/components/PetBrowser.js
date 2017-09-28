import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {



  render() {
 
    const childElem = React.Children.map(this.props.children, child => {
			for(i=0; i< this.props.adoptedPets.length; i++) 
				if(this.props.adoptedPets[i] === child){
					return React.cloneElement(child, {
			    isAdopted: true})
				} else {
					return React.cloneElement(child, {
			    isAdopted: ''})
	     }});

    return (
      <div className="ui cards"> 
				pet={childElem}
				onAdoptPet={this.props.onAdoptPet}
			</div>
    );
  }
}

export default PetBrowser;
