import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  renderPets = () => {
    var petArray = []
    for (var i = 0; i < this.props.pets.length; i++) {
      petArray.push(<Pet pet={this.props.pets[i]} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(this.props.pets[i].id)} />)
    }
    return petArray
  }

  render() {
    return (
      <div className="ui cards">
        <code>&lt;Pet /&gt;</code> &nbsp; components should go here
        {this.renderPets()}
      </div>
    );
  }
}

export default PetBrowser;
