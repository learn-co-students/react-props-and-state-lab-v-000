import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();

    this.handleAdopt = this.handleAdopt.bind(this);
  }

  handleAdopt() {
    this.props.onAdoptPet(this.props.pet.id);
  }

  render() {

    var adoptButton =
      <button className="ui disabled button">Already adopted</button>;

    if(!this.props.isAdopted){
      adoptButton = <button className="ui primary button"
        onClick={this.handleAdopt}
        >Adopt pet</button>;
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} {this.props.pet.gender === 'male' ? "♂" : "♀"}</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {adoptButton}
        </div>
      </div>
    );
  }
}

export default Pet;
