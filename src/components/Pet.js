import React from 'react'

class Pet extends React.Component {

  handleClick = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    const isFemale = this.props.pet.gender === 'female'
    const alreadyAdopted = this.props.pet.isAdopted === true

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {isFemale ? (
              '♀'
            ) : (
              '♂'
            )}
            Name: {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">Type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {alreadyAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>
          )}
        </div>
      </div>
    )
  }
}

export default Pet
