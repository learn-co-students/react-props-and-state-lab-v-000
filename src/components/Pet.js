import React from 'react'

class Pet extends React.Component {

  // gets pet and onAdoptPet() props from Parent

  // example pet data
  // {
  //   id: '2c902312-dfa3-446f-8b4b-5e115170d807',
  //   type: 'cat',
  //   gender: 'male',
  //   age: 3,
  //   weight: 1,
  //   name: 'Teddy',
  //   isAdopted: false,
  // },

  onAdoptPet = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  petGender =() =>{
    return (this.props.pet.gender === 'male'? '♂' : '♀')
  }

  adoptedButton = () => {
    return (this.props.pet.isAdopted ? 
      <button className="ui disabled button">Already adopted</button> :
      <button className="ui primary button" onClick={this.onAdoptPet}>Adopt pet</button>)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.petGender()}
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
          {this.adoptedButton()}
        </div>
      </div>
    )
  }
}

export default Pet
