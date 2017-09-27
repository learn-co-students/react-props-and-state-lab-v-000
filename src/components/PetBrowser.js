import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
 
    const childElem = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
				onAdoptPet: this.props.onAdoptPet,
        isAdopted: this.props.adoptedPets
      });
    });
    return (
      <div className="ui cards" {...this.props.pets} {...this.props.adoptedPets}>
//	{childElem}
       // <code><Pet {...this.props.onAdoptPet}{...this.props.isAdopted}/></code>

<code>{childElem}</code>
//<code>{this.props.children}</code>
</div>
    );
  }
}

export default PetBrowser;
