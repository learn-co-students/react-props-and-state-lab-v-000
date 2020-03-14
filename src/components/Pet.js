import React from 'react'

class Pet extends React.Component {

  clickEvent = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a href="#" className="header">
            {this.props.pet.gender === 'female' ? '♀' : '♂'}
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
            {this.props.pet.isAdopted === false ?
            <button className="ui primary button" onClick={this.clickEvent}>Adopt pet</button> :
            <button className="ui disabled button">Already adopted</button>}
        </div>
      </div>
    )
  }
}

export default Pet
