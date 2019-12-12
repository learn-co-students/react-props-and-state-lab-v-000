import React from 'react'

class Pet extends React.Component {
  renderButton = () => {
    if (this.props.pet.isAdopted === true) {
      return (<button className="ui disabled button">Already adopted</button>)
    } else {
      return (<button onClick={ev => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>)
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <h2 className="header">
            {this.props.pet.gender === 'female' ? '♀' : '♂'}
            {this.props.pet.name}
          </h2>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          { this.renderButton() }
        </div>
      </div>
    )
  }
}

export default Pet
