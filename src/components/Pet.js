import React from 'react'

class Pet extends React.Component {

  renderGender = (gender) => {
    if (gender === 'male'){
      return '♂'
    } else {
      return '♀'
    }
  }

  whichButton = () => {
    if (this.props.pet.isAdopted === 'false'){
      return <button className="ui primary button">Adopt pet</button>
    } else {
      return <button className="ui primary button">Adopt pet</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            { this.renderGender(this.props.pet.gender) }
            { this.props.pet.name }
          </a>
          <div className="meta">
            <span className="date">{ this.props.pet.type }</span>
          </div>
          <div className="description">
            <p>Age: { this.props.pet.age }</p>
            <p>Weight: { this.props.pet.weight }</p>
          </div>
        </div>
        <div className="extra content">
          { this.whichButton() }
        </div>
      </div>
    )
  }
}

export default Pet
