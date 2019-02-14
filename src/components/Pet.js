import React from 'react'

class Pet extends React.Component {
  
  handleClick = () => {
    this.props.onAdoptPet(this.props.pet.id);
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === "female" ? '♀': '♂'}
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
          { this.props.pet.isAdopted ?
            <button className="ui button disabled">Already adopted</button> :
            <button className="ui button primary"
                    onClick={this.handleClick}>Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet
