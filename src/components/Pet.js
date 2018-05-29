import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }

  handleAdoption = () => { this.props.onAdoptPet(this.props.pet.id)  }

  render() {
    const { pet: {name, type, gender, age, weight }, isAdopted } = this.props;

    return (
      <div className="card">
        <div className="content">
          <a className="header"> {name} gender: {gender === "female" ? '♀' : '♂' } </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {!this.props.isAdopted ? (
          <button onClick={this.handleAdoption} className="ui primary button">Adopt pet</button>
          ) : (
          <button className="ui disabled button">Already adopted</button>
          )}
        </div>
      </div>
    );
  }
}

export default Pet;
