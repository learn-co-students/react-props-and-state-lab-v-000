import React from 'react'



class Pet extends React.Component {

  buttonIf = () => {
    if (this.props.pet.isAdopted === false) { return (
    <div className="extra content">
      <button className="ui primary button" onClick={() => {this.props.onAdoptPet(this.props.pet.id)}}>Adopt pet</button>
    </div>
    )} else { return (
    <div className="extra content">
      <button className="ui disabled button">Already adopted</button>
    </div>
  )}
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {(this.props.pet.gender === 'female') ? '♀' : '♂'}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        {this.buttonIf()}
      </div>
    )
  }
}

export default Pet
