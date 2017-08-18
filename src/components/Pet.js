import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    const petData = this.props.pet

    let button = null;
    if (this.props.isAdopted) {
      button = <button className="ui disabled button">Already adopted</button>
    } else {
      button = <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">{petData.name} (gender: {petData.gender === "male" ? '♂' : '♀'})</a>
          <div className="meta">
            <span className="date">{petData.type}</span>
          </div>
          <div className="description">
            <p>Age: {petData.age}</p>
            <p>Weight: {petData.weight}</p>
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