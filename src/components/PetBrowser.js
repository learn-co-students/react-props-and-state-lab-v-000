import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {


  render() {
    return (
      <div className="ui cards">
        <code>&lt;Pet /&gt;</code> &nbsp; components should go here

        {this.props.pets.map((petObject) => {


        return  <Pet key={petObject.id} pet={petObject} isAdopted={this.props.adoptedPets.includes(petObject.id) ? true : false} onAdoptPet={this.props.onAdoptPet} />})}
      </div>
    );
  }
}


export default PetBrowser;
