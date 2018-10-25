import React from 'react'

class Pet extends React.Component {
  constructor() {
    super()

  }

  handleAdoptPet = (event) => {
	  //debugger
  	this.props.onAdoptPet(event)
  }

  render() {
    let button;

    if (this.props.pet.isAdopted) {
	button = `<button className="ui disabled button">Already adopted</button>`;
    } else {
	button = `<button value = {this.props.pet.id} onClick = {event => this.handleAdoptPet(event)} className="ui primary button">Adopt pet</button>`;
    }
	
    const { pet, isAdopted } = this.props
    const { gender, name, type, age, weight } = pet 

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {(this.props.pet.gender === 'female') ? '♀' : '♂'}
            PET NAME: {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">PET TYPE: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
	    {button}
        </div>
      </div>
    )
  }
}

export default Pet
