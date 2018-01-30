import React from 'react';

import Pet from './Pet';


class PetBrowser extends React.Component {
  render() {

    var something = this.props

    var adoptedPets = this.props.adoptedPets;
    var pets = this.props.pets.map(function(el) {

            return <Pet key={el.id} pet={el} onAdoptPet={something.onAdoptPet} isAdopted={adoptedPets.includes(el.id) ? true : false }/>
        });

    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

export default PetBrowser;
