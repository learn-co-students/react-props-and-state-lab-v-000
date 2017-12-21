import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {


  render() {
    let petsArray = new Array
    var onAdoptPet = this.props.onAdoptPet
    var adoptedPets = this.props.adoptedPets
    var pets = this.props.pets.forEach(function(i){
      var isAdopted = false
      if (adoptedPets.includes(i.id)) {
        isAdopted = true
      }
      petsArray.push(<Pet pet={i} onAdoptPet={onAdoptPet} isAdopted={isAdopted}/>)
    })

    return (
      <div className="ui cards">
        {petsArray}
      </div>
    );
  }
}

export default PetBrowser;
