import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }

  genderSymbol = (gender) => {
    return gender === 'male' ? '\u2642' : '\u2640';
  };

  handleClick = () => {
    this.props.onAdoptPet(this.props.pet.id)
  };

  render() {
    const {pet, isAdopted} = this.props;
    const {type, gender, age, weight, name} = pet;
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name: {name} (gender: {this.genderSymbol(gender)})</a>
          <div className="meta">
            <span className="date">Pet type: {type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>
          )};
        </div>
      </div>
    );
  }
}

export default Pet;
