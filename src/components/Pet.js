import React from 'react';

class Pet extends React.Component {
  handleAdoptPet = () => {
    this.props.onAdoptPet(this.props.pet.id);
  };

  render() {
    const { pet, isAdopted } = this.props;
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {pet.name} (gender: {pet.gender === 'male' ? '♂' : '♀'})
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button
            className={`ui ${isAdopted ? 'disabled' : 'primary'} button`}
            onClick={isAdopted ? null : this.handleAdoptPet}
          >
            {isAdopted ? 'Already adopted' : 'Adopt pet'}
          </button>
        </div>
      </div>
    );
  }
}

export default Pet;
