import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  displayPets = () => {
    return this.props.pets.map((value, id) => (
      <Pet onAdoptPet={this.props.onAdoptPet} key={value.id} pet={value} />
    ));
  };

  render() {
    return <div className="ui cards">{this.displayPets()}</div>;
  }
}

export default PetBrowser;

PetBrowser.defaultProps = {};
