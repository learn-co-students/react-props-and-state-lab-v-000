import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  adoptPet = e => {
    this.props.petState.forEach(pet => {
      console.log(e);
      this.props.getPet(e);
    });
  };

  render() {
    return (
      <div className="ui cards">
        {this.props.petState.map(pet => (
          <Pet pet={pet} onAdoptPet={this.adoptPet.bind(this, pet.id)} />
        ))}
      </div>
    );
  }
}

export default PetBrowser;
