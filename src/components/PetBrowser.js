import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        PET COMPONENT SHOULD GO HERE
        {this.props.pets.map(pet => {
          return (
            <Pet
              id={pet.id}
              onAdoptPet={this.props.onAdoptPet}
              gender={pet.gender}
              name={pet.name}
              type={pet.type}
              age={pet.age}
              weight={pet.weight}
              isAdopted={pet.isAdopted}
            />
          );
        })}
      </div>
    );
  }
}

export default PetBrowser;
