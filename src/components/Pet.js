import React from 'react';

class Pet extends React.Component {
  
  handleAdoptPet = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {

    const { pet: {name, type, age, weight, gender}, isAdopted} = this.props;
    return (
      <div className="card">
        <div className="content">
          <a className="header">Name: {name} - {gender === 'male' ? '♂' : '♀'}</a>
          <div className="meta">
            <span className="date">Type: {type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {!isAdopted ? <button className="ui primary button" onClick={this.handleAdoptPet}>Adopt pet</button> : 
          <button className="ui disabled button">Already adopted</button> }
        </div>
      </div>
    );
  }
}

export default Pet;
