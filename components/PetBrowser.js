const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
    const { pets, onAdoptPet, adoptedPets } = this.props;
    const petElements = pets.map((pet, i) => {
      return React.createElement(Pet, {
        key: i,
        pet,
        onAdoptPet,
        isAdopted: adoptedPets.includes(pet.id)
      });
    });

    return (
      <div className="ui cards">
        {petElements}
      </div>
    );
  }
}

module.exports = PetBrowser;
