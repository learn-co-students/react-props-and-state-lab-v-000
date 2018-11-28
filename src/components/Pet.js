import React from 'react'

class Pet extends React.Component {

  displayGender = () => {
    let gender = this.props.pet.gender
    if (gender === "male") {
       return '♂'
    } else {
      return '♀'
    }
  }

  displayAdoptStatus = () => {
    if (this.props.pet.isAdopted === true) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button">Adopt pet</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.displayGender()}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age} </p>
            <p>Weight: {this.props.pet.weight} </p>
          </div>
        </div>
        <div className="extra content">
          {this.displayAdoptStatus()}
        </div>
      </div>
    )
  }
}

export default Pet
