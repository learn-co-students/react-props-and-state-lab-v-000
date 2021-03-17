import React from 'react'

class Pet extends React.Component {
  adoptPet = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  renderAdoptPetButton = () => {
    return (
      this.props.pet.isAdopted
      ? <button className="ui disabled button">Already adopted</button>
      : <button className="ui primary button" onClick={this.adoptPet}>Adopt pet</button>
    )
  }

  render() {
    const petInfo = this.props.pet;

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {petInfo.gender === 'male' ? '♂' : '♀'}
            {petInfo.name}
          </a>
          <div className="meta">
            <span className="date">{petInfo.type}</span>
          </div>
          <div className="description">
            <p>Age: {petInfo.age}</p>
            <p>Weight: {petInfo.weight}</p>
          </div>
        </div>
        <div className="extra content">{this.renderAdoptPetButton()}</div>
      </div>
    )
  }
}

export default Pet
