import React from 'react'

class Pet extends React.Component {
  constructor() {
    super()

    this.state = {
      isAdopted: false, 
    }
  }

  handleClick = (event) => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  renderButton() {
    const isAdopted = this.props.isAdopted; 
    if (isAdopted) {
      return <button className="ui disabled button">Already adopted</button>;
    }
    return <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>
  }

  render() {

    let petGender = "♀"; 
    let button; 
    const isAdopted = this.props.pet.isAdopted; 

    if (this.props.pet.gender === "male") {petGender = "♂"}
    if (isAdopted) {
      button = <button className="ui disabled button">Already adopted</button>;
    } else {
      button = <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>
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
          {button}
        </div>
      </div>
    )
  }
}

export default Pet
