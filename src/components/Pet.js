import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }

  render() {
    const pet = this.props.pet
    const gender = (pet.gender == 'male' ? '♂' : '♀')


    return (
      <div className="card">
        <div className="content">
          <a className="header">{pet.name} {gender} </a>
          <div className="meta">
            <span className="date">Pet type: {pet.type} </span>
          </div>
          <div className="description">
            <p>Age: {pet.age} </p>
            <p>Weight: {pet.weight} </p>
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
