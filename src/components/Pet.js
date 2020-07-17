import React from 'react'

class Pet extends React.Component {
  render() {

    let petGender = ''
    if (this.props.pet.gender === 'female') {
      petGender = '♀';
    } else {
      petGender = '♂';
    }

    let button;
    if (this.props.pet.isAdopted) {
      button = <button className="ui disabled button">Already adopted</button>
    } else {
      button = <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
    }


    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}
          </a>
          {petGender}
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
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
