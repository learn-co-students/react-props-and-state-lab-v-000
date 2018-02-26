import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  // over here, `this` did not work inside the map. even with a bind. unless passing `this` as the second arg in the map.
  makePetComponents(arrOfPets) {
    return arrOfPets.map((petObj) => {
      return (<Pet pet={{...petObj}} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(petObj.id)} />)
    }, this);
  }
  render() {
    const renderedPets = this.makePetComponents(this.props.pets)
    return (
      <div className="ui cards">
        {renderedPets}
      </div>
    );
  }
}

export default PetBrowser;
