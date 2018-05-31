import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }

  genderSybmol(gender) {
    if (gender === "male"){
      return '♂'
    }
    return '♀'
  }

  handleAdoptPet = () => this.props.onAdoptPet(this.props.pet.id)

  render() {
    const { pet: { name, type, gender, age, weight }, isAdopted } = this.props;
    const button = isAdopted ? (
      <button className="ui disabled button">Already adopted</button>
    ) : (
      <button className="ui primary button" onClick={this.handleAdoptPet}>Adopt pet</button>
    );

    return (
      <div className="card">
        <div className="content">
          <a className="header">{name}(gender: {this.genderSybmol(gender)})</a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {button}
        </div>
      </div>
    );
  }
}

export default Pet;
