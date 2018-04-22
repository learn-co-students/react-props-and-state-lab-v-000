import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let pets = this.props.pets;
    let PETS = pets.map(x => 
    <Pet 
      pet={x} 
      onAdoptPet={this.props.onAdoptPet} 
      isAdopted={this.props.adoptedPets.includes(x.id)}
    />)
    
    return (
      <div className="ui cards">
        <code>&lt;Pet /&gt;</code> &nbsp; {PETS}
      </div>
    );
  }
}

export default PetBrowser;
