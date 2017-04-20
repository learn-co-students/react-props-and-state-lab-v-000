const React = require('react');

const Pet = require('./Pet');

function includes(array, item) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == item) {
      return true;  
    }
  }
  return false; 
}
class PetBrowser extends React.Component {
  render() {
    const petCards = this.props.pets.map((pet, index ) => ( 
      <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={includes(this.props.adoptedPets, pet.id)} />  
    ));  
    return (
      <div className="ui cards">
        {petCards}
      </div>
    );
  }
}

module.exports = PetBrowser;
