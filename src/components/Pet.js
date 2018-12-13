import React from 'react'

class Pet extends React.Component {

    //gets {pet} and onAdoptPet()

    // componentDidMount () {
    //   debugger;
    // }

    handleClick = (id) => {
      this.props.onAdoptPet(id)
    }

    petGender = () => {
      return (
        this.props.pet.gender === "male" ? "♂" : "♀"
      )
    }

    isAdoptedButton = () => {
      return (
        this.props.pet.isAdopted ?
        <button className="ui disabled button">Already adopted</button> : 
        <button className="ui primary button" onClick={() => this.handleClick(this.props.pet.id)}>Adopt pet</button>
        )
    }
    
  render() {
    return (

      
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            PET NAME: {this.props.pet.name}
            PET GENDER: {this.petGender()}
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
          {this.isAdoptedButton()}
        </div>
      </div>
    )
  }
}

export default Pet
