import React from 'react'

class Pet extends React.Component {

  render() {
    const { pet, onAdoptPet } = this.props
    const { id, gender, name, type, age, weight, isAdopted } = pet 
//	debugger	
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {(gender === 'female') ? '♀' : '♂'}
            PET NAME: {name}
          </a>
          <div className="meta">
            <span className="date">PET TYPE: {type}</span>
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
	<button onClick = {() => onAdoptPet(id)} className="ui primary button">Adopt pet</button>
		)}
	   
        </div>
      </div>
    )
  }
}

export default Pet
