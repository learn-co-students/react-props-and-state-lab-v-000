import React from 'react';

class Pet extends React.Component {

  handleClick = () => {
    this.props.onAdoptPet(this.props.pet.id);
  }

  render() {
    let adoptionBtn = null;
    if (this.props.isAdopted) {
      adoptionBtn = (
        <button className="ui disabled button">Already adopted</button>
      );
    } else {
      adoptionBtn = (
        <button className="ui primary button" onClick={this.handleClick}>
          Adopt pet
        </button>
      );
    }
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name} {this.props.pet.gender === 'female' ? '♀' : '♂'}
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
          {adoptionBtn}
        </div>
      </div>
    );
  }
}

export default Pet;
