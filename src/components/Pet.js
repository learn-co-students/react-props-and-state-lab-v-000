import React from 'react'

class Pet extends React.Component {
  render() {
    const { onAdoptPet } = this.props
    // destructure this.props.pet
    const { 
      id, 
      gender, 
      age, 
      name, 
      type, 
      weight, 
      isAdopted 
    } = this.props.pet

    const alreadyAdoptedButton = <button className="ui disabled button">Already adopted</button>
    const adoptPetButton = <button className="ui primary button" onClick={() => onAdoptPet(id)}>Adopt pet</button>
    //const button = isAdopted ? alreadyAdoptedButton : adoptPetButton
    
    return (
      <div className="card">
        <div className="content">
          <a className="header" href="/">
            {/*'♀' OR '♂' */}
            {gender === 'female' ? '♀' : '♂'}
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
          {isAdopted ? alreadyAdoptedButton : adoptPetButton}
          {/* button */}
          {/* 
          {isAdopted === true &&
            <button className="ui disabled button">Already adopted</button>
          }
          {isAdopted === false &&
            <button className="ui primary button" onClick={() => onAdoptPet(id)}>Adopt pet</button>
          }
          */}
        </div>
      </div>
    )
  }
}

export default Pet
