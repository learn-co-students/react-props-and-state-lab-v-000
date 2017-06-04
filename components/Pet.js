const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onAdoptPet(this.props.pet.id);
  }

  render() {
    const { name, gender, type, age, weight } = this.props.pet;

    return (
      <div className="card">
        <div className="content">
          <a className="header">{name} {gender === 'male' ? '♂' : '♀'})</a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted && <button className="ui disabled button">Already adopted</button>}
          {!this.props.isAdopted && <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
