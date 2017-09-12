import React from 'react';

import Pet from './Pet';
import allPets from '../data/pets'

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
     { allPets.map((pet) => {
        return (
        < Pet
          id='pet.id'
          type='pet.type'
          gender='pet.gender'
          age='pet.age'
          weight='pet.weight'
          name='pet.name'
          />)
      })
    }
      </div>
    );
  }
}

export default PetBrowser;
