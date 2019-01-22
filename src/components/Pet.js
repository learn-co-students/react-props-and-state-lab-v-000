import React from 'react';

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}{' '}
            {this.props.pet.gender === 'female' ? '♀' : '♂'}
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
          {this.props.pet.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button
              onClick={() => this.props.onAdoptPet(this.props.pet.id)}
              className="ui primary button">
              Adopt pet
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Pet;

/*
// - When rendered, Pet component should receive a pet prop. 
// - Use the attributes in this data to render the pet card correctly. 
// - The pet card should show the pet's name, type, age and weight.
// - Based on the pet's gender, the component also needs to contain either a male (`♂`) or female (`♀`) symbol.
// - Pet component should receive an isAdopted prop.
// - Using the isAdopted prop, render the correct button in the pet's card:
// - If the pet is adopted, show the disabled button. 
// - If the pet is NOT adopted, show the primary button to adopt the pet.
// Pet component should receive an onAdoptPet callback prop. 
// The onAdoptPet callback prop gets called with the pet's id 
// when the user clicks the adopt pet button, NOT when they click the disabled button!
*/
