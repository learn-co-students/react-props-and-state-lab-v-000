import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }

  render() {
    var female;
    if (this.props.pet.gender === "female") {
      female = true;
    }
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} (gender: {female ? '♀' : '♂'})</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age:{this.props.pet.age} </p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui primary button">Adopt pet</button>
          <button className="ui disabled button">Already adopted</button>
        </div>
      </div>
    );
  }
}

export default Pet;
