import React from 'react'

class Pet extends React.Component {

  genderRender = () => {
    if(this.props.pet.gender === 'male'){
      return '♂'
    } else {
      return '♀'
    };
  }

  handleClick = (e) => {
    let petID = e.target.id
    this.props.onAdoptPet(petID)
  }

  adoptedButton = () => {
    
    if(this.props.pet.isAdopted === true){
      return (
        <button className="ui disabled button">Already adopted</button>
      )
    } else {
      return(
        <button className="ui primary button" id={this.props.pet.id} onClick={() => this.props.onAdoptPet(this.props.pet.id)} >Adopt pet</button>
      )
    }
  }

  render() {
    return (

      <div className="card">
        <div className="content">
          <a className="header">
            {this.genderRender()}
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
          {this.adoptedButton()}
        </div>
      </div>
    )
  }
}

export default Pet
