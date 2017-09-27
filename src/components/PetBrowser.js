import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
  var childPets = React.Children.map(this.props.pets.children, child =>{return React.cloneElement(child, {
      onAdoptPet: () => {},
		//if(this.props.onAdoptPet === true)  {
	//		isAdopted: true
	//		} else { isAdopted: false}
    });
   });


    return (
      <div className="ui cards">
        <code>&lt;Pet /&gt;</code> &nbsp; components should go here
		{this.props.pets.children}	<Pet />
{childPets}
</div>
    );
  }
}

export default PetBrowser;
