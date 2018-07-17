import React from 'react'

class Pet extends React.Component {
  adopt = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    let adopt_button = null
    if (this.props.pet.isAdopted) {
      adopt_button = <button className="ui disabled button">Already adopted</button>
    } else {
      adopt_button = <button onClick={this.adopt} className="ui primary button">Adopt pet</button>
    }

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
          {adopt_button}
        </div>
      </div>
    )
  }
}

export default Pet
