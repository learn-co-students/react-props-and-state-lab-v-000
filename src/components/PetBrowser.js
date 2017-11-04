import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  handleAdoptingPet = () => {
    debugger
  }





  render() {
    return (
      <div className="ui cards">

      {this.props.pets.map(x => {
        return <Pet pet={x} key={x.id} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(x.id)}/>
      })}

      </div>
    );
  }
}

export default PetBrowser;
