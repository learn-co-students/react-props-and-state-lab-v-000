import React from 'react';

class Pet extends React.Component {
  constructor(props) {
    super(props);
    this.adoptButton = this.adoptButton.bind(this);
  }

  getGender() {
    return this.props.pet.gender === "male" ? "♂" : "♀";
  }

  getButton() {
    let pet = this.props.pet
    let isAdopted = this.props.isAdopted
    if (!isAdopted) {
      return <button onClick={this.adoptButton} className="ui primary button">Adopt pet</button>
    }
      return <button className="ui disabled button">Already adopted</button>
  }

  adoptButton() {
    this.props.onAdoptPet(this.props.pet.id)
  }


  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} {this.getGender()}</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.getButton()}
        </div>
      </div>
    );
  }
}

export default Pet;