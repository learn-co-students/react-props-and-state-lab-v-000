import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        <ul>
          {Object.keys(this.props.pets).map(key => (
          <Pet 
            pet={this.props.pets[key]}
            onAdoptPet={this.props.onAdoptPet}
            isAdopted={this.props.adoptedPets.includes(this.props.pets[key].id)}
          />
          ))}
        </ul>
      </div>
    );
  }
}

export default PetBrowser;
