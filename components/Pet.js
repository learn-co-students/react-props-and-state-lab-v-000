import React from 'react';

export default class Pet extends React.Component {
  constructor() {
    super();

    this.onAdoptPet = this.onAdoptPet.bind(this);
  }

  onAdoptPet() {
    this.props.onAdoptPet(this.props.pet.id);
  }

  render() {
    const { pet, isAdopted } = this.props;
    const { name, type, gender, age, weight } = pet;

    return (
      <div className="card">
        <div className="content">
          <a className="header">{name} {gender === 'male' ? '♂' : '♀'}</a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {!isAdopted && <button className="ui primary button" onClick={this.onAdoptPet}>Adopt pet</button>}
          {isAdopted && <button className="ui disabled button">Already adopted</button>}
        </div>
      </div>
    );
  }
}

Pet.propTypes = {
	isAdopted: React.PropTypes.bool
}

Pet.defaultProps = {
	isAdopted: false,
};