import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }

  adoptPet = (e) => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    const {age, weight, type, name, id, gender} = this.props.pet

    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name {name} (gender: {gender === 'male'? "♂" : "♀"})</a>
          <div className="meta">
            <span className="date">Pet type: {type}</span>
          </div>
          <div className="description">
            <p>Age: {age} </p>
            <p>Weight: {weight} </p>
          </div>
        </div>
        <div className="extra content">
        { this.props.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={this.adoptPet}>Adopt pet</button> }
        </div>
      </div>
    );
  }
}

export default Pet;
