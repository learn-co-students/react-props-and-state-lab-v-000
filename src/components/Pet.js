import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.petInfo.name}
            {this.props.petInfo.gender === "male" ? "♂" : "♀"}
          </a>
          <div className="meta">
            <span className="date">{this.props.petInfo.type.toUpperCase()}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.petInfo.age}</p>
            <p>Weight: {this.props.petInfo.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.petInfo.isAdopted === true ? 
          <button className="ui disabled button">Already adopted</button> :
          <button className="ui primary button" id = {this.props.petInfo.id} onClick = {this.props.adopter}>Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet
