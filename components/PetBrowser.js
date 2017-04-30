const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
    const pets = this.props.pets.map((pet_obj) => (
      <Pet key={pet_obj.id} pet={pet_obj} onAdoptPet={this.props.onAdoptPet}
        isAdopted={this.props.adoptedPets.includes(pet_obj.id)}
      />
    ))
    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

PetBrowser.propTypes = {
  pets: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  adoptedPets: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
  onAdoptPet: React.PropTypes.func.isRequired
}

module.exports = PetBrowser;
