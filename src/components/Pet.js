import React from 'react';

class Pet extends React.Component {

  render() {
    const isAdopted = this.props.isAdopted
    const petId = this.props.pet.id

    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name: {this.props.pet.name}
          {this.props.pet.gender === 'male' ? '♂' : '♀'}
          </a>
          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          { isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button className="ui primary button" onClick={() => this.props.onAdoptPet(petId)}>Adopt pet</button>
          )}
        </div>
      </div>
    );
  }
}

export default Pet;
