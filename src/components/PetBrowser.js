import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const {pets, adoptedPets, onAdoptPet} = this.props;

    const renderChildren = pets.map((element) => 
      <Pet 
        pet={element}
        onAdoptPet={onAdoptPet}
        isAdopted={adoptedPets.includes(element.id)}
      />
    );

    return(
      <div className="ui cards">
        {renderChildren}
      </div>
    );
  }
}

export default PetBrowser;
