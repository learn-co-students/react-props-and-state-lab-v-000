import React from 'react';
const GENDER_ICON_MALE = '♂';
const GENDER_ICON_FEMALE = '♀';

class Pet extends React.Component {
  constructor() {
    super();
    
    this.onAdoptPet = this.onAdoptPet.bind(this);
    this.isAdopted = this.isAdopted.bind(this);
  }
  
  isAdopted() {
    this.props.isAdopted();
  }
  
  onAdoptPet() {
    this.props.onAdoptPet(this.props.pet.id)
  }
  
  getGender = () => {
    if (this.props.hasOwnProperty('pet') && this.props.pet.gender === "male") {
      return GENDER_ICON_MALE
    }
    else {
      return GENDER_ICON_FEMALE
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name (gender: ♂ or ♀)</a>
            <h2>{this.props.hasOwnProperty('pet') && this.props.pet.name} {this.props.hasOwnProperty('pet') && this.getGender()}</h2>
          <div className="meta">
            <span className="date">Pet type</span>
            <h2>{this.props.hasOwnProperty('pet') && this.props.pet.type}</h2>
          </div>
          <div className="description">
            <p>Age: {this.props.hasOwnProperty('pet') && this.props.pet.age}</p>
            <p>Weight: {this.props.hasOwnProperty('pet') && this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          { !this.props.isAdopted && <button className="ui primary button" onClick={this.onAdoptPet}>Adopt pet</button> }
          { this.props.isAdopted && <button className="ui disabled button">Already adopted</button> }
        </div>
      </div>
    );
  }
}

export default Pet;