import React from 'react'

class Pet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.pet.name,
      type: props.pet.type,
      age: props.pet.age,
      weight: props.pet.weight,
      gender: props.pet.gender,
      isAdopted: props.pet.isAdopted,
      onAdoptPet: props.onAdoptPet,
      id: props.pet.id
    }

  }

  returnGender = () => {
    let symbol = '♀'
    if (this.state.gender === 'male') { symbol = '♂' }

    return <div className='gender'>{symbol}</div>
  }

  returnAdoptionButton = () => {
    if (this.state.isAdopted) {
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
    this.state.onAdoptPet(this.state.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            { this.returnGender() }
            { this.state.name }
          </a>
          <div className="meta">
            <span className="date">{this.state.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.state.age}</p>
            <p>Weight: {this.state.weight}</p>
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
