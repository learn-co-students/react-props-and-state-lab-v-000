import React from 'react'

class Pet extends React.Component {
  render() {
    const { 
      id, 
      gender, 
      age, 
      name, 
      type, 
      weight, 
      isAdopted 
    } = this.props.pet

    const alreadyAdoptedButton = <button className="ui disabled button">Already adopted</button>
    const adoptPetButton = <button className="ui primary button" onClick={() => this.props.onAdoptPet(id)}>Adopt pet</button>

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === 'female' ? '♀' : '♂'}
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
          {isAdopted ? alreadyAdoptedButton : adoptPetButton}
        </div>
      </div>
    )
  }
}

export default Pet
