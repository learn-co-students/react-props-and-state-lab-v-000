import React from 'react'

class Pet extends React.Component {
  clickHandler = (e) => {
    this.props.onAdoptPet(this.props.pet.id)    
  }
  render() {
    let pet = this.props.pet
    let adoptButton
    if(pet.isAdopted) {
      adoptButton = <button className="ui disabled button">Already adopted</button>
    } else {
      adoptButton = <button onClick={this.clickHandler.bind(this)} className="ui primary button">Adopt pet</button>
    }
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            Gender: {
              (pet.gender === 'male') ? '♂' : '♀'
              }<br/>
            Name: {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
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
