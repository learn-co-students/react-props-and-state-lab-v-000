import React from 'react'
import '../card-style.css'

const Pet = ({ pet: { id, name, type, gender, age, weight, isAdopted }, onAdoptPet }) => {
  return (
    <div className="card">
      <div className="content">
        <a className="header">
          <strong>{name}</strong> {gender === 'female' ? '♀' : '♂'}
        </a>
        <div className="meta">
          <span className="date"><small>{type}</small></span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted ? (
          <button className="ui disabled button">Already adopted</button>
        ) : (
          <button onClick={() => onAdoptPet(id)} className="ui primary button">Adopt pet</button>
        )}
      </div>
    </div>
  )
}

export default Pet
