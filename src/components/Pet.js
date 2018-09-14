import React from 'react'

class Pet extends React.Component {

  pickGender = () => {
    if (this.props.gender === "female") {
       return '♀'
    } else {return '♂'}
  }

  decideButton = () => {
    if (this.props.isAdopted === "false") {
      return <button className="ui disabled button">Already adopted</button>
    } else {
        return <button className="ui primary button">Adopt pet</button>
      }
  }

  render() {
    return (
      <div className="card" value={this.props.id}>
        <div className="content">
          <a className="header">
            {this.pickGender()}
            {this.props.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {this.decideButton()}
        </div>
      </div>
    )
  }
}

export default Pet
