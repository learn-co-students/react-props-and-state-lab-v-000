import React from 'react'

class Pet extends React.Component {
  render() {
    const id = this.props.pet.id;
    const gender = this.props.pet.gender;
    const name = this.props.pet.name;
    const age = this.props.pet.age;
    const weight = this.props.pet.weight;
    const type = this.props.pet.type;
    const isAdopted = this.props.pet.isAdopted
    const onAdoptPet = this.props.onAdoptPet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {name} ({gender === "male" ? '♂' : '♀'})
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
          {isAdopted ? (
            <button className="ui disabled button">Already adopted</button> ) : (
            <button className="ui primary button" onClick={() => onAdoptPet(id)}>Adopt pet</button>)}
        </div>
      </div>
    )
  }
}

export default Pet