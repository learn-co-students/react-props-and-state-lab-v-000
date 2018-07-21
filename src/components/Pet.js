import React from 'react'

class Pet extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   petId: this.props.pet.id,
    //   petName: this.props.pet.name,
    //   petType: this.props.pet.type,
    //   petAge: this.props.pet.age,
    //   petWeight: this.props.pet.weight,
    //   petGender: this.props.pet.gender,
    //   isAdopted: this.props.pet.isAdopted
    // }
    // onAdoptPet: this.props.onAdoptPet;
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
          {this.props.pet.gender === 'female' ?
          '♀' : '♂'
          }
            // {/*'♀' OR '♂' */}
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
          {this.props.pet.isAdopted ? (<button className="ui disabled button">Already adopted</button>) : (
          <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>)}
        </div>
      </div>
    )
  }
}

export default Pet
