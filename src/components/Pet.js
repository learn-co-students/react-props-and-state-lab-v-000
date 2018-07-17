import React from 'react'

class Pet extends React.Component {
  render() {
    const {pet: {name, gender, type, age, weight, id, isAdopted}, onAdoptPet} = this.props

    const adoptButton = isAdopted ? (
      <button className="ui disabled button">
        Already adopted
      </button>
    ) : (
      <button className="ui primary button" onClick={() => onAdoptPet(id)}>
        Adopt pet
      </button>
    )

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === 'female' ? '♀' :'♂'}
            {name}
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
          {adoptButton}
        </div>
      </div>
    )
  }
}

export default Pet
