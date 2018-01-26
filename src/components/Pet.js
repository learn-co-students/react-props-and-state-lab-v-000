import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }
  adoptPet = () => {
    return this.props.onAdoptPet(this.props.pet.id)
  }
  render() {

    let buttonForExtraContent;
    
    if (this.props.isAdopted === true) {
      buttonForExtraContent = <button className="ui disabled button">Already adopted</button>
    } else {
      buttonForExtraContent = <button className="ui primary button" onClick={this.adoptPet}>Adopt pet</button>
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} (gender: {this.props.pet.gender === "female" ? "♀" : "♂"})</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {buttonForExtraContent}
        </div>
      </div>
    );
  }
}

export default Pet;
