import React from 'react'

class Pet extends React.Component {
  render() {
    let petID = this.props.pet.id
    let petGender = "♂"

    if (this.props.pet.gender === 'female') {
      petGender = "♀"
    }
    let petButton = <button className="ui primary button" petid={this.props.pet.id} onClick={() => this.props.onAdoptPet(petID)}>Adopt pet</button>
    if (this.props.pet.isAdopted === true) {
      petButton = <button className="ui disabled button">Already adopted</button>
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {petGender}
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
        <div className="extra content">
          {petButton}
        </div>
      </div>
    )
  }
}

export default Pet
