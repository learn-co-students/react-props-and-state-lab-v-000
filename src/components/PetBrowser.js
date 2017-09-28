import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  render() {
    const childElem = React.Children.map(this.props.children, child => {

				if(this.props.adoptedPets === child){
					return React.cloneElement(child, {
			    isAdopted: true})
				} else {
					return React.cloneElement(child, {
			    isAdopted: ''})
	     }});

    return (

      <div className="ui cards"><Pet
				onAdoptPet={this.props.onAdoptPet}
/>
			</div>
    );
  }
}

export default PetBrowser;
