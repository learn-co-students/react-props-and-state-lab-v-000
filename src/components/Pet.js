import React from 'react'

class Pet extends React.Component {
  constructor(props) {
    super(props )
    this.adoptPet = this.adoptPet.bind(this)
  }

  //x = () =>{
  adoptPet() {
    console.log("I'm here")
    this.props.onAdoptPet(this.props.pet.id);
  }


  render() {
    console.log(this.props)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}
            {this.props.pet.gender === "female" ? '♀' : '♂'}
            PET NAME
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
          {this.props.pet.isAdopted === true ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button onClick={this.adoptPet} className="ui primary button">
              Adopt pet
            </button>
        )}
        </div>
      </div>
    )
  }
}

export default Pet
