import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }

  handleClick = () => {
    this.props.onAdoptPet(this.props.pet.id);
  }

  render() {
    let petDetails = this.props.pet;
    return (
      <div className="card">
        <div className="content">
          <a className="header">{petDetails.name} ({petDetails.gender == 'male' ? '♂' : '♀'})</a>
          <div className="meta">
            <span className="date">{petDetails.type}</span>
          </div>
          <div className="description">
            <p>Age: {petDetails.age} </p>
            <p>Weight:{petDetails.weight} </p>
          </div>
        </div>
        <div className="extra content">
        {this.props.isAdopted ? (<button className="ui disabled button">Already adopted</button>) : (<button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>) }
        </div>
      </div>
    );
  }
}

export default Pet;
