import React from 'react'

class Pet extends React.Component {
  
  // Initialize state info
  constructor(props) {
    super(props)
    // console.log('pet props ', this.props.pet)

    this.state = {
      id: this.props.pet.id,
      name: this.props.pet.name,
      type: this.props.pet.type,
      age: this.props.pet.age,
      weight: this.props.pet.weight,
      gender: this.props.pet.gender,
      isAdopted: this.props.pet.isAdopted
    }
  }
  
  // Adopt pet and return adopted pet id to PetBrowser
  onAdoptPet = () => {
    // console.log('adopt pet')
    this.props.onAdoptPet(this.state.id)
  }

  
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            PET NAME
            {this.state.name} {this.state.gender === 'female' ? '♀' : '♂'}
          </a>
          <div className="meta">
            <span className="date">PET TYPE {this.state.type}</span>
          </div>
          <div className="description">
            <p>Age: PET AGE {this.state.age}</p>
            <p>Weight: PET WEIGHT {this.state.weight}</p>
          </div>
        </div>
        <div className="extra content">
          { this.state.isAdopted ? 
            (<button className="ui disabled button">Already adopted</button>)
            :
            (<button className="ui primary button" onClick={this.onAdoptPet}>Adopt pet</button>)
          }
        </div>
      </div>
    )
  }
}

export default Pet
