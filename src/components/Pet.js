import React from 'react'

class Pet extends React.Component {


//  1:
//  age: 2
//  gender: "male"
//  id: "6057de4f-6725-4b9f-a0b1-1f3bd3ad04a6"
//  isAdopted: false
//  name: "Hemingway"
//  type: "cat"
//  weight: 5

  render() {

    //destructure the incoming props object
    const {
      name, 
      type, 
      gender, 
      age, 
      weight,
      isAdopted,
      id
    } = this.props.pet

    const { onAdoptPet } = this.props
    // equivalent to:
    // const name = this.props.pet.name
    // const type = this.props.pet.type
    // const age = this.props.pet.age
    // const weight = this.props.pet.weight

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}

            {gender === "male" ? '♂' : '♀'}
              
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? 
        ( <button className="ui disabled button">Already adopted</button> ) :
        ( <button className="ui primary button" onClick={() => onAdoptPet(id)}>Adopt pet</button> 
        ) }
        </div>
      </div>
    )
  }
}

export default Pet
