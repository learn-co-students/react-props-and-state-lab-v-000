import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();

    this.handleAdoptPet = this.handleAdoptPet.bind(this);
  }

  handleAdoptPet() {
    this.props.onAdoptPet(this.props.pet.id);
  }

  //props = {pet: {name, gender, type, age, weight}, isAdopted}

  render() {
    //decosntructor //const pet = this.props.pet
    const { pet, isAdopted} = this.props;
    const { name, type, gender, age, weight } = pet
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
        {!isAdopted && (<button className="ui primary button" onClick={this.handleAdoptPet}>Adopt pet</button>)}
          
          {isAdopted && (<button className="ui disabled button">Already adopted</button>)}
        </div>
      </div>
    );
  }
}

export default Pet;