import React from 'react'

class Pet extends React.Component {

  handleClick = (event) => {
    this.props.onAdoptPet()
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            PET NAME: {this.props.pet}
            console.log(this.props.pet)
          </a>
          <div className="meta">
            <span className="date">PET TYPE</span>
          </div>
          <div className="description">
            <p>Age: PET AGE</p>
            <p>Weight: PET WEIGHT</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
