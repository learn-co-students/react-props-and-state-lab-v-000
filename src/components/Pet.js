import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }

  handleOnAdopt = e => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    const {pet, isAdopted } = this.props
    return (
      <div className="card">
        <div className="content">
          <a className="header"> {pet.name} {pet.gender === 'male' ? '♂' : "♀"}</a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={this.handleOnAdopt}>Adopt pet</button>}
        </div>
      </div>
    );
  }
}

export default Pet;
