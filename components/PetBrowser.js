const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
    const renderedPets = this.props.pets.map((pet, index) => (
      <Pet pet={pet} key={index} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)} />
    ))
    return (
      <div className="ui cards">
        {renderedPets}
      </div>
    );
  }
}

module.exports = PetBrowser;
