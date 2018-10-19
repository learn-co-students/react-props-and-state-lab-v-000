import React from 'react'

class Pet extends React.Component {


  onAdoptPetHandler = (pId) => {
    this.props.onAdoptPet(pId)
  }
  petIsAdopted = () => {
    return this.props.isAdopted
  }

  render() {
    console.log("pets.js log", this.props.pet)

    let pet = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {pet.gender === "female" ? "♀" : "♂"}
            {/*'♀' OR '♂' */}
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">PET TYPE: </span>
            {pet.type}
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={() => this.onAdoptPetHandler(pet.id)}>Adopt pet</button>}

        </div>
      </div>
    )
  }
}

export default Pet
