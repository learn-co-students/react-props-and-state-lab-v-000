import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */} 
           
          
            
            PET NAME
            {this.props.pet.name}
          </a>

          <div className="gender">
            <span className="gender">PET GENDER</span>
            {this.props.pet.gender === 'male' ? '♂' : '♀'} 

          </div>

          <div className="meta">
            <span className="date">PET TYPE</span>
            {this.props.pet.type}

          </div>

          

          <div className="description">
            <p>Age: PET AGE</p>
            {this.props.pet.age}

            <p>Weight: PET WEIGHT</p>
            {this.props.pet.weight}

          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
