const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();

    this.handleAdoptPet = this.handleAdoptPet.bind(this)
  }

  handleAdoptPet() {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    const isAdopted = this.props.isAdopted

    let button = null
    if (isAdopted) {
      button = <button className="ui disabled button">Already adopted</button>
    } else {
      button = <button className="ui primary button" onClick={this.handleAdoptPet}>Adopt pet</button>
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} {this.props.pet.gender === "female" ? "♀" : "♂" }</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {button}
        </div>
      </div>
    );
  }
}

Pet.defaultProps = {
  isAdopted: false
}

Pet.propTypes = {
  isAdopted: React.PropTypes.bool
}

module.exports = Pet;
