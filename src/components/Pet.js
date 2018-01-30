import React from 'react';
import PropTypes from 'prop-types';

class Pet extends React.Component {


handleClick = () => {

   this.props.onAdoptPet(this.props.pet.id)

}


  render() {

    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name: {this.props.pet.name} (gender: {this.props.pet.gender === "male" ? '♂' : '♀'})</a>
          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age:  {this.props.pet.age} </p>
            <p>Weight: {this.props.pet.weight} </p>
          </div>
        </div>
        <div className="extra content">
          <button className={(this.props.isAdopted === false) ? "ui primary button" : "ui disabled button"}
                  onClick={(this.props.isAdopted === false) ? this.handleClick : null}>
                  {(this.props.isAdopted === false) ? "Adopt Pet" : "Already Adopted"}
          </button>
        </div>
      </div>
    );
  }
}





Pet.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  weight: PropTypes.number,
  isAdopted: PropTypes.bool,
  type: PropTypes.string
}

//
// Should have a pet prop. Use the attributes in this data to render the pet card correctly. It should show the pet's name, type, age and weight. Based on the pet's gender, the component also needs to contain either a male (♂) or female (♀) symbol.
// Should have an isAdopted prop. Using this prop, render the correct button in the pet's card; if the pet is adopted, show the disabled button. Otherwise, show the primary button to adopt the pet.
// Should have an onAdoptPet callback prop. This callback prop gets called with the pet's id when the user clicks the adopt pet button — not when they click the disabled button!

export default Pet;
