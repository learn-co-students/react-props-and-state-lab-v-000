const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();

    this.gender = this.gender.bind(this);
    this.adoptPet = this.adoptPet.bind(this);
  };

  adoptPet(){
    this.props.onAdoptPet.apply(this, [this.props.pet.id]);
  };

  gender(){
    if (this.props.pet.gender === "male") {
      return "♂"
    } else {
      return "♀"
    }
  };

  render() {
    let button = null;
    let that = this;
    if (that.props.isAdopted) {
      button = <button className="ui disabled button">Already adopted</button>;
    } else {
      button = <button className="ui primary button" onClick={that.adoptPet}>Adopt pet</button>;
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} (gender: {this.gender()})</a>
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

module.exports = Pet;
