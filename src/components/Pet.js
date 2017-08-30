import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();

    this.adoptClick = this.adoptClick.bind(this);
  }

  adoptClick(){
    this.props.onAdoptPet(this.props.pet.id);
  }

  render() {
    var genderSymbol = this.props.pet.gender === 'male' ? '♂' : '♀';
    var adoptButton = !this.props.isAdopted ? <button className="ui primary button" onClick={this.adoptClick}>Adopt pet</button> : <button className="ui disabled button">Already adopted</button>
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} ({genderSymbol})</a>
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
