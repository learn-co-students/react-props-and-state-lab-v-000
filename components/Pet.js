const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    const { pet, isAdopted } = this.props;
    const { name, type, gender, age, weight } = pet;

    return (
      <div className="card">
        <div className="content">
          <a className="header">{name} (gender: {gender === 'male' ? '♂' : '♀'})</a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {!isAdopted ? <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button> : <button className="ui disabled button">Already adopted</button>}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
