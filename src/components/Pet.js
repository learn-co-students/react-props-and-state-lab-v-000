import React from 'react';
import PropTypes from 'prop-types';

class Pet extends React.Component {
  constructor() {
    super();
  }
  handleClick = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    const pet = this.props.pet
    const isAdopted = this.props.isAdopted;
    const gender = pet.gender === 'male' ? '♂' : '♀';
    return (
      <div className="card">
        <div className="content">
          <a className="header">{pet.name} {gender}</a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {isAdopted ? <button className="ui disabled button">Already adopted</button>
          : <button onClick={this.handleClick} className="ui primary button">Adopt pet</button>}
        </div>
      </div>
    );
  }
}

export default Pet;
