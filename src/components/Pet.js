import React from 'react'

export default class Pet extends React.Component {
  render() {
    // here, we'll alter the JSX to pass props so we can change the state of our App
    // and to dynamically represent the pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === 'female' ? '♀' : '♂' }
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
          {this.props.pet.isAdopted ? 
            (<button className="ui disabled button">Already adopted</button>) : 
            (<button
              className="ui primary button"
              onClick={() => this.props.onAdoptPet(this.props.pet.id)}>
              Adopt pet
            </button>)
          } 
        </div>
      </div>
    )
  }
}
