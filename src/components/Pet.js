import React from 'react'

class Pet extends React.Component {

  handleAdoptPet = e => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    const { pet, isAdopted } = this.props;
    const { gender, name, type, age, weight } = pet;
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {name}
            {gender === 'female' ? '♀' : '♂'}
          </a>
          <div className="meta">
            <span className="date">
            {type}
            </span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          { this.props.pet.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
          )}
        </div>
      </div>
    )
  }
}

export default Pet
