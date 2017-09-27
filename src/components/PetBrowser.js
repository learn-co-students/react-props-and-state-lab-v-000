import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {



  render() {
 
   // const childElem = React.Children.map(this.props.children, child => {
     // return React.cloneElement(child, {
				//onAdoptPet: this.props.onAdoptPet,
        //isAdopted: this.props.adoptedPets
     // });
    //});
    return (
      <div className="ui cards"> 
	<code><Pet pets={this.props.pets}/></code>
</div>
    );
  }
}

export default PetBrowser;
