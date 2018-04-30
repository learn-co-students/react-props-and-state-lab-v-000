import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
      {this.props.pets.map(function(x) {
        let adoptionStatus
        if (this.props.adoptedPets.includes(x.id)) {
          adoptionStatus = true
      } else {
        adoptionStatus = false
      }
        return <Pet pet={x} onAdoptPet={this.props.onAdoptPet} isAdopted={adoptionStatus} />
      }.bind(this))}
      </div>
    );
  }
}

export default PetBrowser;
