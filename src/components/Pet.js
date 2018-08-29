import React, { Component } from "react";

export default class Pet extends Component {
  constructor() {
    super();
  }

  handleAdoptPet = e => {
    this.props.onAdoptPet(this.props.pet.id);
  };

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}
            {this.props.pet.gender === "female" ? "♀" : "♂"}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {!this.props.pet.isAdopted && (
            <button className="ui primary button" onClick={this.handleAdoptPet}>
              Adopt pet
            </button>
          )}
          {this.props.pet.isAdopted && (
            <button className="ui disabled button">Already adopted</button>
          )}
        </div>
      </div>
    );
  }
}
