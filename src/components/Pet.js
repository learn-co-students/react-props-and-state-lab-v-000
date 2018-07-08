import React from 'react'

class Pet extends React.Component {
  clickHandler = (e) => {
        this.props.onAdoptPet(this.props.pet.id)    
   }
 
 
 
  render() {
    let pet = this.props.pet
    let adoptButton
    if(pet.isAdopted) {
      adoptButton = <button className="ui disabled button">Already adopted</button>
    } else {
      adoptButton = <button onClick={this.clickHandler.bind(this)} className="ui primary button">Adopt pet</button>
    }
    return (
      <div className="card">
        <div className="content">
          <a className="header">
          Gender: {
              (pet.gender === 'male') ? '♂' : '♀'
              }<br/>{/*'♀' OR '♂' */}
            NAME: {pet.name}
          </a>
          <div className="meta">
            <span className="date">PET TYPE: {pet.type}</span>
          </div>
          <div className="description">
            <p>Age: PET AGE: {pet.age}</p>
            <p>Weight: PET WEIGHT: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {adoptButton}
        </div>
      </div>
    )
  }
}

export default Pet
