import React from 'react'

class Pet extends React.Component {
  getPetSex = () => {
    if (this.props.pet.gender === "male") return "♂"
    if (this.props.pet.gender === "female") return "♀"
  }

  adoptionButton = () => {
    return (this.props.pet.isAdopted === true) ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}
            {" "}{this.getPetSex()}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.adoptionButton()}
        </div>
      </div>
    )
  }
}

export default Pet