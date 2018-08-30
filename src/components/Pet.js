import React from 'react'

class Pet extends React.Component {
  constructor(props) {
    super(props)
  }

// how to shorten the this.props.pet.name?
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name} {this.props.pet.gender === 'male' ? '♂' : '♀'} {/* code gender symbols? */}
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
        {this.props.pet.isAdopted ? (
          <button className="ui disabled button">Already adopted</button>

        ) : (
          // why pass a our callback prop as the return of the function?
          <button onClick={() => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>
        )}
        </div>
      </div>
    )
  }
}

export default Pet
