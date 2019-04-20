import React from 'react'

class Pet extends React.Component {

  render() {

    const name = this.props.pet.name
    const age = this.props.pet.age
    const weight = this.props.pet.weight
    const type = this.props.pet.type
    const gender = this.props.pet.gender
    const petID = this.props.pet.id

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            ID: {petID} <br />
            Name: {name} <br />
            Gender: {gender === "female" ? '♀' :'♂'}

          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">

            <button className="ui disabled button">Already adopted</button>
          <button
          onClick={()=> this.props.onAdoptPet(this.props.pet.id)}
          className="ui primary button">
          Adopt Pet
          </button>

        </div>
      </div>
    )
  }
}

export default Pet
