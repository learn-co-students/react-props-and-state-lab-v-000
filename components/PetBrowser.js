const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var isAdopted = false;
    const adoptedPetIds = this.props.adoptedPets;
    const adoptedPets = this.props.pets.map(pet => {
      isAdopted = false;
      if(adoptedPetIds.includes(pet.id)) {
        isAdopted = true;
      }
      return < Pet pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={isAdopted} />;
    });

    return (
      <div className="ui cards">
        {adoptedPets}
      </div>
    );
  }
}

module.exports = PetBrowser;
