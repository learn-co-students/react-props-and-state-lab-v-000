import React from 'react';

class Pet extends React.Component {

  handleAdoption = () => this.props.onAdoptPet(this.props.pet.id)

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} {this.props.pet.gender === 'male' ? '♂' : '♀'}</a>
          <div className="meta">
            <i><span className="date">{this.props.pet.type}</span></i>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {!this.props.isAdopted ?
          <button className="ui primary button" onClick={this.handleAdoption}>Adopt pet</button>
          :
          <button className="ui disabled button">Already adopted</button>
          }
        </div>
      </div>
    );
  }
}

Pet.defaultProps = {
  isAdopted: false,
};

export default Pet;
