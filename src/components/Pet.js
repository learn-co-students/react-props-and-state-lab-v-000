import React from 'react'

class Pet extends React.Component {
		handleAdoptPet = event => {
			this.props.onAdoptPet(this.props.pet.id)
		}
		
		render() {
		const  { pet } = this.props
		const { name, type, gender, age, weight } = pet

    return (
			<div className="card">
        <div className="content">
          <a className="header">{name} {gender === 'male' ? '♂' : '♀'}</a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
					{pet.isAdopted ? (<button className="ui disabled button">Already adopted</button>) : (<button onClick={() => this.props.onAdoptPet(pet.id)} className="ui primary button"> Adopt pet </button>)}
        </div>
      </div>
    )
  }
}

export default Pet
