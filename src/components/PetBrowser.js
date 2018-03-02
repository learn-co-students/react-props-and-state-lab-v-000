import React from 'react';

import Pet from './Pet';


class PetBrowser extends React.Component {
  checkIfAdopted = (pet) => {
    return this.props.adoptedPets.includes(pet)
  }

  render() {
    const pets = this.props.pets.map((pet, index) => {
      return (
      <Pet
        pet={pet}
        // key={index}
        isAdopted={this.checkIfAdopted(pet.id)}
        onAdoptPet={this.props.onAdoptPet}
      />
    )

    })
    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

export default PetBrowser;

// 1. Should have a `pet` prop. Use the attributes in this data to render the pet card correctly.
// It should show the pet's `name`, `type`, `age` and `weight`. Based on the pet's `gender`, the component also needs to contain either
// a male (`♂`) or female (`♀`) symbol.
// 2. Should have an `isAdopted` prop. Using this prop, render the correct button in the pet's card;
// if the pet is adopted, show the disabled button. Otherwise, show the primary button to adopt the pet.
// 3. Should have an `onAdoptPet` callback prop. This callback prop gets called with the pet's `id` when the user
// clicks the adopt pet button — _not_ when they click the disabled button!
