import React from 'react'

class Pet extends React.Component {
  render() {
    const gender = this.props.pet.gender;
    const isAdopted = this.props.pet.isAdopted;
    const id = this.props.pet.id
    const onClickAdoptPet  = this.props.onAdoptPet;
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {(gender === 'female' ? '♀' : '♂')}
            {/*'♀' OR '♂' */}
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
          { (isAdopted ? 
          <button className="ui disabled button">Already adopted</button> : 
          <button onClick={function() {onClickAdoptPet(id)}} className="ui primary button">Adopt pet</button> ) 
          }
        </div>
      </div>
    )
  }
}

export default Pet
