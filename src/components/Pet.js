import React from 'react'

class Pet extends React.Component {

  adoptButton = () => {
    let adoptButton
    if (this.props.pet.isAdopted === false) {
      adoptButton = <button onClick={() => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>
    } else {
      adoptButton = <button className="ui disabled button">Already adopted</button>
    }
    return adoptButton
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
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
        {this.adoptButton()}
        </div>
      </div>
    )
  }
}

export default Pet
