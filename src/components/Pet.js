import React from 'react'

class Pet extends React.Component {

  constructor(props) {
    super(props)
    this.state= {
      alreadyAdopted: 'none',
      notAdopted: 'inline-block'
    }
  }


  genderSymbol = () => {
    if (this.props.pet.gender === 'male') {
      return '♂'
    } else {
      return '♀'
    }
  }

  handleAdopt = (event, petId) => {
    console.log(this)
    petId = this.props.onAdoptPet(this.props.pet.id)
    this.setState({notAdopted: 'none', alreadyAdopted: 'inline-block'})
  }

  checkAdopted = (petId) => {
    petId = this.props.isAdopted(this.props.pet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.genderSymbol()}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">Type: {this.props.pet.type} </span>
          </div>
          <div className="description">

            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button" style={{display: this.state.alreadyAdopted}}>Already adopted</button>
          <button className="ui primary button" onClick={this.handleAdopt} style={{display: this.state.notAdopted}}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
