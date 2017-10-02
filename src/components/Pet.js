import React from 'react';
import PropTypes from 'prop-types';


class Pet extends React.Component {

  handleAdopt = event => {this.props.onAdoptPet(this.props.pet.id)}

  render() {
    var enabled = <button className="ui primary button" onClick={this.handleAdopt}>Adopt pet</button>
    var disabled = <button className="ui disabled button">Already adopted</button>
    var button = this.props.isAdopted ? disabled : enabled
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} (gender: {this.props.pet.gender === "male" ? '♂' : '♀'})</a>
          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          { button }

        </div>
      </div>
    );
  }
}

Pet.propTypes = {
  pet: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    age: PropTypes.number,
    weight: PropTypes.number,
    gender: PropTypes.string,
  }),
  isAdopted: PropTypes.bool,
  onAdoptPet: PropTypes.func,
}

export default Pet;
