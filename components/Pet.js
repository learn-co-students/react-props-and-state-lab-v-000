const React = require('react');

class Pet extends React.Component {
  constructor(props) {
    super(props);

    this.adoptPet = this.adoptPet.bind(this)
  }

  adoptPet() {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} (gender: {this.props.pet.gender === "male" ? "♂" : "♀"})</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button className="ui primary button" onClick={this.adoptPet}>Adopt pet</button>
          )}
        </div>
      </div>
    );
  }
}

Pet.propTypes = {
  pet: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    age: React.PropTypes.number.isRequired,
    weight: React.PropTypes.number.isRequired,
    gender: React.PropTypes.oneOf(["male", "female"]).isRequired
  }).isRequired,
  isAdopted: React.PropTypes.bool.isRequired,
  onAdoptPet: React.PropTypes.func.isRequired
}

module.exports = Pet;
