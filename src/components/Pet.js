import React from 'react';
import PropTypes from 'prop-types'

class Pet extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

handleClick = () => {
  this.props.onAdoptPet(this.props.pet.id)
}

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} (gender: {this.props.pet.gender == "male" ? "♂" : "♀" })</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted == false ? <button
            className="ui primary button" onClick={this.handleClick}>
            Adopt pet</button> : <button
            className="ui disabled button">
            Already adopted</button> }
        </div>
      </div>
    );
  }
}

// Pet.propTypes = {
//   name: P
// }

export default Pet;
