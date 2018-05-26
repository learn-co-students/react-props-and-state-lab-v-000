import React from 'react';

class Pet extends React.Component {
  constructor(props) {
    super(props);

    this.id = this.props.pet.id;
    this.name = this.props.pet.name;
    this.gender = this.props.pet.gender === 'male' ? '♂' : '♀';
    this.type = this.props.pet.type;
    this.age = this.props.pet.age;
    this.weight = this.props.pet.weight;
  }

  handleClick = () => {
    this.props.onAdoptPet(this.id);
  }

  render() {
    let button;

    if (!this.props.isAdopted) {
      button = <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>
    }
    else {
      button = <button className="ui disabled button">Already adopted</button>
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">Name: {this.name}  ({this.gender})</a>
          <div className="meta">
            <span className="date">Type: {this.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.age}</p>
            <p>Weight: {this.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {button}
        </div>
      </div>
    );
  }
}

export default Pet;
