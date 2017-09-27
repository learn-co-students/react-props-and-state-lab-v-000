import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
//  var childElem = React.Children.map(this.props.pets, child=>{return React.cloneElement(child, {
    
//	isAdopted: this.props.isAdopted
//}
 //  );
  // });

    return (
      <div className="ui cards">
<<<<<<< HEAD
        <code><Pet {...this.props.pet}{...this.props.isAdopted}/></code>

=======
        <code>&lt;Pet /&gt;</code> &nbsp; components should go here
		{this.props.pets.children}	<Pet />
{childPets}
>>>>>>> b40c9929a581b1cd18b557c83beda46a5ed1aa71
</div>
    );
  }
}

export default PetBrowser;
