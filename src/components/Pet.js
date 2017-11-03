import React from 'react';

class Pet extends React.Component {
  // constructor() {
  //   super();
  // }


  adoptPet = () => this.props.onAdoptPet(this.props.pet.id)

  render() {
    const disabledButton = (
      <button className="ui disabled button">Already adopted</button>   
    )

    const adoptButton = (
      <button className="ui primary button" onClick={this.adoptPet}>Adopt pet</button>
    )

    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name}(gender: {this.props.pet.gender === "male" ? "♂" : "♀"})</a>
          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">

          {this.props.isAdopted ? disabledButton : adoptButton }
        </div>
      </div>
    );
  }
}

export default Pet;
