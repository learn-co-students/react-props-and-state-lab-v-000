import React from 'react';
import PropTypes from 'prop-types';

class Pet extends React.Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {

    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} {this.props.pet.gender === "male" ? "♂" : "♀"}</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted ?
            <button className="ui disabled button">Already adopted</button> :
            <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
          }
        </div>
      </div>
    );
  }
}

export default Pet;

Pet.propTypes = {
  isAdopted: PropTypes.bool,
  pet: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    gender: PropTypes.string,
    type: PropTypes.string,
    age: PropTypes.number,
    weight: PropTypes.number
  })
}
