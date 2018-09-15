import React from 'react'

class Pet extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      adoptedStatus: this.props.pet.isAdopted,
      onAdoptPet: ''
    }
  }
  gender = (petGender) => {
    if (petGender == 'male') {
      return '♂'
    } else if (petGender == 'female') {
      return '♀'
    }
  }

  changeAdoptStatus = (event) => {
    this.props.onAdoptPet(this.props.pet.id)
    this.setState({
      adoptedStatus: true,
    })
  }

  render() {

    const isAdopted = this.state.adoptedStatus
    let button

    if (isAdopted == true) {
      button = <button className="ui disabled button">Already adopted</button>
    } else {
      button = <button className="ui primary button"
        onClick={this.changeAdoptStatus}>Adopt pet</button>
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.gender(this.props.pet.gender)}
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
        <div className="extra content" >
          {button}
        </div>
      </div>
    )
  }
}

export default Pet
