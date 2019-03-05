import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  createCards = () => {
    return this.props.pets.map((pet, i) => (
      <Pet pet={pet} key={i} onAdoptPet={this.props.onAdoptPet} />
    ));
  };

  render() {
    return <div className="ui cards">{this.createCards()}</div>;
  }
}

export default PetBrowser;
