import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
    this.state = { timesClicked: 0 };
    this.adoptPet = this.adoptPet.bind(this);
  }

  adoptPet() {
    this.props.onAdoptPet(this.props.pet.id);
  }

  render() {
    const {pet, isAdopted} = this.props;
    const {name, type, gender, age, weight } = pet;

    return (
      <div className="card">
        <div className="content">
        <br/>
        <a className="header">{name} {gender === 'male' ? '♂' : '♀'}</a>
          <div className="meta">
            <span className="date">Type: {type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted ?
            <button className="ui disabled button">Already adopted</button> :
            <button className="ui primary button" onClick={this.adoptPet}>Adopt pet</button>
          }
        </div>
      </div>
    );
  }
}

export default Pet;
