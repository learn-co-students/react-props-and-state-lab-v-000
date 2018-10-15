import React from 'react';
// import PropTypes from 'prop-types';

class Pet extends React.Component {

  handleAdoptPet(){
    this.props.onAdoptPet(this.props.pet.id)
  }

  whatGender(gender) {
    const renderFemale = <h3> ♀ </h3>
    const renderMale = <h3> ♂ </h3>
    return gender === 'male' ? renderMale : renderFemale
  }


render() {
  const { pet } = this.props;

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            <h3> {pet.name} </h3>
            {this.whatGender(pet.gender)}
          </a>
          <div className="meta">
            <span className="date">Pet type</span>
          </div>
          <div className="description">
            <p>Type: {pet.type} </p>
            <p>Age: {pet.age} </p>
            <p>Weight: {pet.weight} </p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted ?
            <button className="ui disabled button">Already adopted</button> :
            <button className="ui primary button" onClick={this.handleAdoptPet.bind(this)}>Adopt pet</button>
          }
        </div>
      </div>
    );

  }
}


export default Pet;
