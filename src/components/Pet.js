import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }

  handleClick = () => {this.props.onAdoptPet(this.props.pet.id)}

  render() {
    let button = <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>
    if (this.props.isAdopted) {
      button = <button className="ui disabled button">Already adopted</button>
    }
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name {this.props.pet.name} (gender: {this.props.pet.gender === 'female' ? '♀' : '♂' })</a>
          <div className="meta">
            <span className="date">Pet {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age} </p>
            <p>Weight: {this.props.pet.weight} </p>
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
