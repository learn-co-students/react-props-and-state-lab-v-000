import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }

  checkGender = (gender) => {
    if (gender == 'male') {
      return '♂'
    } else {
      return '♀'
    }
  }

  isAdopted = () => {
    if (this.props.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>
    }
  }

  handleClick = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name {this.props.pet.name} {this.checkGender(this.props.pet.gender)}</a>
          <div className="meta">
            <span className="date">Pet type {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.isAdopted()}
        </div>
      </div>
    );
  }
}

export default Pet;
