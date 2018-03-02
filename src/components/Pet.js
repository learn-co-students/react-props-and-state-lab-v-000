import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();

  }
  handleAdoptPet = e => {
    this.props.onAdoptPet(this.props.pet.id)
  }


  render() {
    let gender = this.props.pet.gender === "male" ? "♂" : "♀"
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name: {this.props.pet.name} Gender: {gender}</a>
          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age} years</p>
            <p>Weight: {this.props.pet.weight} lbs</p>
          </div>
        </div>
        <div className="extra content">
        {this.props.isAdopted === true ?
          <button className="ui disabled button">Already adopted</button> :
          <button className="ui primary button" onClick={this.handleAdoptPet}>Adopt pet</button>
        }
        </div>
      </div>
    );
  }
}

export default Pet;


// 1. Should have a `pet` prop. Use the attributes in this data to render the pet card correctly.
// It should show the pet's `name`, `type`, `age` and `weight`.
// Based on the pet's `gender`, the component also needs to contain either a male (`♂`) or female (`♀`) symbol.
// 2. Should have an `isAdopted` prop. Using this prop, render the correct button in the pet's card;
// if the pet is adopted, show the disabled button. Otherwise, show the primary button to adopt the pet.
// 2. Should have an `onAdoptPet` callback prop.
// This callback prop gets called with the pet's `id` when the user clicks the adopt pet button — _not_ when they click the
// disabled button!
