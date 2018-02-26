import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }

  adopt = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Name: {this.props.pet.name} {this.props.pet.gender === 'male' && '♂'}{this.props.pet.gender === 'female' && '♀'}</a>
          <div className="meta">
            <span className="date">Type: {this.props.pet.type.charAt(0).toUpperCase() + this.props.pet.type.substr(1).toLowerCase()}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted &&
            <button className="ui disabled button">Already adopted</button>
          }
          {!this.props.isAdopted &&
            <button onClick={this.adopt} className="ui primary button">Adopt pet</button>
          }
        </div>
      </div>
    );
  }
}

export default Pet;
