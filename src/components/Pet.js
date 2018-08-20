import React from 'react'

class Pet extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.name,
      type: this.props.type,
      age: this.props.age,
      weight: this.props.weight,
      gender: this.props.gender
    }
  }
  

  
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            PET NAME
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
          <button className="ui primary button">Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
