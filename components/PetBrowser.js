const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {

  constructor(){
    super();
  };

  render() {
    const anything = this.props.pets.map(pet => <Pet
      name={pet.name}
      type={pet.type}
      gender={pet.gender}
      age={pet.age}
      weight={pet.weight}
      isAdopted={this.props.adoptedPets.includes(pet.id)}
      onAdoptPet={this.props.onAdoptPet}
    />);

    return (
      <div className="ui cards">
        {anything}
      </div>
    );
  }
}

module.exports = PetBrowser;
