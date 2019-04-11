import React from 'react'

class Pet extends React.Component {

  pet = this.props.pet

  returnGender = () => {
    let symbol = '♀'
    if (this.pet.gender === 'male') { symbol = '♂' }

    return <div className='gender'>{symbol}</div>
  }

  returnAdoptionButton = () => {
    if (this.pet.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>      
    } else {
      return <button 
                  className="ui primary button"
                  onClick={ this.handleAdoptPetClick }>
                Adopt pet
              </button> 
    }
  }

  handleAdoptPetClick = () => {
    this.props.onAdoptPet(this.pet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            { this.returnGender() }
            { this.pet.name }
          </a>
          <div className="meta">
            <span className="date">{this.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.pet.age}</p>
            <p>Weight: {this.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          { this.returnAdoptionButton() }
        </div>
      </div>
    )
  }
}

export default Pet
