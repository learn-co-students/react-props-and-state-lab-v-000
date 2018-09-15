import React from 'react'

class Pet extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      adoptedStatus: this.props.isAdopted
    }
  }
  gender = (petGender) => {
    if (petGender == 'male') {
      return '♂'
    } else if (petGender == 'female') {
      return '♀'
    }
  }

  renderAdoptButton = (adoptedStatus) => {
    if (this.state.adoptedStatus == true) {
      $('.ui.primary.button').hide()
    } else {
      $('.ui.disabled.button').hide()
    }
  }

  handleChange = (event) => {
    this.setState({
      adoptedStatus: true
    })
  }

  render() {
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
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button" onClick={this.props.onAdoptPet}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
