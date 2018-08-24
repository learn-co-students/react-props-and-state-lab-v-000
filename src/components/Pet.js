import React from 'react'

const Pet = ({ pet: {id, type, name, age, weight }) => (
  <div className="card">
    <div className="content">
      <a className="header">
        {name} {gender === 'male' ? '♂' : '♀'}
      </a>
      <div className="meta">
        <span className="date">PET TYPE</span>
      </div>
      <div className="description">
        <p>Age: PET AGE</p>
        <p>Weight: PET WEIGHT</p>
      </div>
    </div>
    <div className="extra content">
      <button className="ui disabled button">Already adopted</button>
      <button className="ui primary button">Adopt pet</button>
    </div>
  </div>
)

export default Pet
