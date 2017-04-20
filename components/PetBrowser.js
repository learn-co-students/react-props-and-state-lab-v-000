const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
    const allPets = this.props.pets.map(pet => (
      <Pet onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)}/>
    ));
    return (
      <div className="ui cards">
        {allPets}
      </div>
    );
  }
}

module.exports = PetBrowser;
