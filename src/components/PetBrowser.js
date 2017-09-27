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
        <code><Pet {...this.props.pet}{...this.props.isAdopted}/></code>

</div>
    );
  }
}

export default PetBrowser;
